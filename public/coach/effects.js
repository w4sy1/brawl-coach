/* Qualitative state transitions, not damage/cooldown simulation or win statistics. */
(function(){
'use strict';
const groups={
 damage:{
  pressure:'periodic poison burn burnArea poisonArea periodicArea bombard bombs pressure periodicBoost consistent burnTrail decoy',
  burst:'area projectile poke stacking healthScale rate lastShot lightning boost combo strike charged snipe assassinate healthDrain burst closeArea pickup antiAdvance execute triggerMarks delayedArea triggerSpirits antiTank areaDuration contact splash launchMecha explosion trap debris barrage isolate landing orbit objective convergingShots retaliate wideArea chargedShot distanceScale bush homing targetedBarrage radial antiGroup triggerMines triggerPoison shortBat spikes wave antiAssassin'
 },
 heal:{sustain:'self lifesteal convertDamage regeneration recentDamage mecha missingHealth lifestealBoost',team:'ally rate mode allyBoost spiritBoost',summonSustain:'summon'},
 projectile:{reach:'range superRange',accuracy:'speed orbitSpeed focusSpeed homing curve focus',multiTarget:'pierce count burstCount superCount spread split chain explosionRadius orbitRadius',pressure:'orbit boomerang areaDuration',setup:'mark',wallPass:'wallPierce wallSplash',coverDependency:'bounce',geometry:'recall fixedRange allElements reverseOrder burstCombo'},
 control:{control:'knockback pull root zone slow antiHeal knockup stun fear damageReduction slowTrail projectileSlow slippery hypnosis strength silence trapSilence silenceDuration multiLane stunDuration slowArea trapSlow freeze freezeRate charm carry repelArea holdGround traps suplex',isolation:'stasis cocoon isolate mindControl sleep',constraints:'wakeOnDamage'},
 vision:{vision:'reveal allyReveal',stealth:'allyInvisible ambush invisible'},
 ammo:{uptime:'refill free reload rewind capacity',disruption:'drain enemyReloadSlow steal reloadBlock'},
 shield:{durability:'self selfDecay',team:'ally'},
 mobility:{mobility:'jump speed momentum teleport dash dodge charge rewind approach aggression drill formSpeed dive swap attach jumpRange tracks engage flight recoilJump dashRange grapple roll escape targetTravel dashCooldown blastJump',teamMobility:'allyFloat allyPortal sharedLaunch',isolation:'controlledEnemySpeed'},
 cost:{progression:'resource rage',mobility:'speed',offense:'enemyDamage projectileDamage summonDamage',team:'allyHeal projectileHeal',uptime:'action summonMovement ammo super',durability:'health',control:'nextSuperStun trapKnockback',cover:'bush',safety:'groupedEnemy'},
 terrain:{wallBreak:'destroy removeOwn burnBush',cover:'create rebuild growBush',wallPass:'phase overWalls',coverDependency:'coverUse bushUse',terrainAccess:'water adapt'},
 defense:{durability:'frontline damageReduction damageTransfer deathPrevention selfCocoon untargetable flatReduction invulnerable maxHealth realm',projectileDefense:'blockProjectiles reflectProjectiles reflect',controlDefense:'controlImmune allyControlImmune cleanse',cover:'cover allyCover',revive:'revive',enemyProtection:'enemyInvulnerable'},
 transform:{transformation:'form enrage ninja modeChoice dashAttack throwSuper weaponSwap instantDamage summonHealer mecha eject'},
 super:{superAccess:'charge radius rate refund duration initial'},
 support:{team:'damage reload vulnerability buff speed maxHealth range superRate'},
 summon:{summons:'create convert partner ego rats booster sandbag oil porters hive decoy stealth cannon healer totem bear turret machine',summonSustain:'health heal shield',summonPressure:'speed damage attackRate damageArea',vision:'vision',reposition:'recall'},
 resource:{progression:'gather power convert gain drop consume ants spread level initial notes duration cubeScaling attachmentDuration removePost heat retain markDuration fists rage rageGain freezeGain oilSpread oilTrail restoreCharge sandstorm'},
 mode:{exclusiveMode:'laser saber wing'},
 choice:{choice:'terrainBuff randomSuper rerollSuper randomBuff',knowledge:'predictSuper'}
};
const conditions=new Set(('always acceleratedHit afterTeleport allyNear allyRevive ants area attached attack attackHit bounce burnDamage bush bushMaxRange cannonForm centerHit charged cocoon convert dash destroyed dualTether enemyInSuper enemyNear enemyOrWall enemyVisible enraged enragedOutOfCombat firstAttack flight focused form formHit freeze freshGround fullAmmoHit fullHealth groupedEnemy heal heat highTargetHealth hit impact invisible kill landing lastAmmo lingering lowHealth lowTargetHealth maxRange maxSpeed mechaDestroyed miss missedSuper moving nearWall nextAttack nextAttackHit nextDamage nextSuper nextSuperLanding nonBrawler notes ownArea periodic periodicBigEggHit periodicHit pickup piercedTarget poisonKill poisoned portal postHit rage realm realmPickup recall recalledHit receivedDamage resource secondHit slowed speed splitForm stasis stationary strikeSpot summon summonArea summonHit summonNear super superArea superEnd superExplosion superHit superKill superMark superOrGadget superReady tether thirdAttack trap travelDistance undamaged wallHit wallPierce water weaponGround weaponNearEnemy').split(' '));
const dispatch=new Map();
for(const [type,channels]of Object.entries(groups))for(const [channel,list]of Object.entries(channels))for(const operation of list.split(' '))dispatch.set(type+':'+operation,{type,operation,channel});
const supports=effect=>!!effect&&dispatch.has(effect.type+':'+effect.operation)&&conditions.has(effect.condition||'always');
const decode=token=>{const [head,condition='always']=token.split('@'),[type,operation]=head.split(':');const value={type,operation,condition};if(!supports(value))throw Error('Unsupported effect '+token);return value};
const aliases={
 'heal:ally':'healAlly','heal:allyBoost':'healAlly','heal:spiritBoost':'healAlly',
 'control:antiHeal':'antiHeal','control:stun':'stun','control:freeze':'stun','control:root':'slow','control:slow':'slow','control:slowArea':'slow','control:slowTrail':'slow','control:pull':'pull','control:knockback':'knockback',
 'terrain:destroy':'wallBreak','terrain:create':'wallCreate','terrain:rebuild':'wallCreate','terrain:coverUse':'wallDependent','terrain:bushUse':'wallDependent','projectile:bounce':'wallDependent','terrain:overWalls':'overWalls','projectile:wallPierce':'overWalls','projectile:wallSplash':'overWalls',
 'damage:poison':'poison','support:speed':'teamSpeed','shield:ally':'teamShield','defense:controlImmune':'immunity','defense:allyControlImmune':'immunity','defense:cleanse':'immunity','projectile:range':'rangeBoost','damage:antiTank':'antiTank'
};
function conditionState(effect,scenario={}){
 const condition=effect.condition||'always';if(condition==='always')return 'ready';
 // Unknown is retained as unknown, never treated as a confirmed hit or cooldown completion.
 if(scenario[condition]===true)return 'ready';if(scenario[condition]===false)return 'blocked';return 'conditional';
}
function transition(effect,scenario={}){
 if(!supports(effect))throw Error('Unsupported effect handler');
 const def=dispatch.get(effect.type+':'+effect.operation),status=conditionState(effect,scenario),key=effect.type+':'+effect.operation;
 const changes={},traits=[];if(status==='blocked')return {key,status,channel:def.channel,changes,traits,scoreEligible:false};
 const value=effect.type==='cost'?-1:1;
 // Every supported operation has a semantic state transition, including non-numeric transformations.
 changes[def.channel]=value;
 if(aliases[key])traits.push(aliases[key]);
 if(effect.type==='damage'&&['poison','burn','burnArea','burnTrail','periodic','periodicArea','periodicBoost','poisonArea'].includes(effect.operation))changes.damageOverTime=1;
 if(effect.type==='projectile'){
  if(effect.operation==='reverseOrder'){delete changes.geometry;changes.attackSequence='reverse';}
  if(effect.operation==='fixedRange'){delete changes.geometry;changes.rangePolicy='unchanged';}
  if(effect.operation==='allElements'){delete changes.geometry;changes.elements=['earth','grass','water'];}
  if(effect.operation==='recall'){delete changes.geometry;changes.weaponReturn='manual';}
  if(effect.operation==='burstCombo'){delete changes.geometry;changes.ownProjectileCombo=true;}
 }
 if(effect.type==='control'&&effect.operation==='stasis')changes.targetInvulnerable=true;
 if(effect.type==='control'&&effect.operation==='sleep')changes.breakOnDamage=true;
 if(effect.type==='control'&&effect.operation==='wakeOnDamage')changes.breakOnDamage=true;
 if(effect.type==='defense'&&effect.operation==='enemyInvulnerable'){delete changes.enemyProtection;changes.targetInvulnerable=true;}
 if(effect.type==='cost'&&effect.operation==='action')changes.canAttack=false;
 if(effect.type==='cost'&&effect.operation==='nextSuperStun')changes.nextSuperStun=false;
 if(effect.type==='cost'&&effect.operation==='trapKnockback')changes.trapKnockback=false;
 if(effect.type==='ammo'&&effect.operation==='steal')changes.uptime=1;
 if(effect.type==='resource'){
  changes.resourceOperation=effect.operation;
  if(['consume','removePost'].includes(effect.operation))changes.progression=-1;
 }
 if(effect.type==='transform')changes.form=effect.operation;
 if(effect.type==='transform'&&effect.operation==='instantDamage'){delete changes.form;changes.damageTiming='instant';}
 if(effect.type==='transform'&&effect.operation==='summonHealer')changes.summonRole='healer';
 if(effect.type==='transform'&&effect.operation==='weaponSwap')changes.weaponAssignment='swapWithSummon';
 if(effect.type==='choice'){
  delete changes.choice;delete changes.knowledge;
  if(effect.operation==='terrainBuff')changes.alternatives=['earth:damageReduction','grass:invisible','water:speed'];
  if(effect.operation==='randomBuff')changes.alternatives=['unknownBuff'];
  if(effect.operation==='randomSuper')changes.alternatives=['randomSuper'];
  if(effect.operation==='rerollSuper')changes.alternatives=['differentRandomSuper'];
  if(effect.operation==='predictSuper')changes.knownNextSuper=true;
 }
 if(effect.type==='mode'){
  delete changes.exclusiveMode;changes.mode=effect.operation;
  // Exclusive variants: only the selected mode contributes, never their union.
  if(effect.operation==='laser'){changes.attackStyle='rangedBurn';changes.reach=1;changes.damageOverTime=1;}
  if(effect.operation==='saber'){changes.attackStyle='meleeDash';changes.mobility=1;changes.burst=1;changes.durability=1;changes.superAccess=1;changes.superFromDamage=true;traits.push('knockback');}
  if(effect.operation==='wing'){changes.attackStyle='closeLasersFlight';changes.mobility=1;changes.pressure=1;}
 }
 return {key,status,channel:def.channel,changes,traits,scoreEligible:!['geometry','transformation','choice','knowledge','exclusiveMode','constraints'].includes(def.channel)};
}
function evaluate(model,context={}){
 const activation=context.activation?conditionState({condition:context.activation},context.scenario):'ready';
 const transitions=model.map(effect=>{
  const result=transition(effect,context.scenario);
  if(activation==='blocked')return {...result,status:'blocked',changes:{},traits:[],scoreEligible:false,effect};
  if(activation==='conditional'&&result.status==='ready')result.status='conditional';
  return {...result,effect};
 }),axes={},traits=[];
 for(const row of transitions){for(const trait of row.traits)if(!traits.includes(trait))traits.push(trait);if((row.scoreEligible||row.effect.type==='mode')&&row.status!=='blocked')for(const [key,value]of Object.entries(row.changes))if(typeof value==='number')axes[key]=(axes[key]||0)+value;}
 // Raw units from the source are never replaced by invented numeric damage/cooldown values.
 const weights={pressure:context.mode==='Heist'?1:.55,burst:['Knockout','Bounty','Wipeout'].includes(context.mode)?.8:.45,sustain:.55,team:.6,summonSustain:.35,reach:context.terrain==='open'?.8:.35,accuracy:.45,multiTarget:.4,setup:.55,wallPass:context.terrain==='closed'?.7:.3,coverDependency:context.terrain==='open'?-.35:.25,control:['Gem Grab','Hot Zone'].includes(context.mode)?.7:.4,isolation:.4,vision:context.bushes>.15?.7:.3,stealth:.35,uptime:.4,disruption:.45,durability:.4,mobility:.4,teamMobility:.6,offense:.5,cover:context.terrain==='closed'?.4:.2,safety:.3,wallBreak:context.terrain==='closed'?.45:.2,terrainAccess:.2,projectileDefense:.4,controlDefense:.4,revive:.65,superAccess:.35,summons:.35,summonPressure:.4,progression:.2,reposition:.25};
 const suitability=Object.entries(axes).reduce((n,[key,value])=>n+(weights[key]||0)*Math.max(-2,Math.min(2,value)),0);
 const tactical=[];
 for(const row of transitions){if(row.status==='blocked')continue;const s=row.changes;
  if(s.targetInvulnerable)tactical.push('tacticTargetProtected');
  if(s.breakOnDamage)tactical.push('tacticDamageWakes');
  if(s.canAttack===false)tactical.push('tacticNoAttack');
  if(s.nextSuperStun===false||s.trapKnockback===false)tactical.push('tacticControlTradeoff');
  if(s.attackSequence==='reverse')tactical.push('tacticReverseOrder');
  if(s.rangePolicy==='unchanged')tactical.push('tacticRangeUnchanged');
  if(s.elements)tactical.push('tacticAllElements');
  if(s.weaponReturn)tactical.push('tacticRecall');
  if(s.ownProjectileCombo)tactical.push('tacticOwnCombo');
  if(s.weaponAssignment)tactical.push('tacticWeaponSwap');
  if(s.damageTiming)tactical.push('tacticInstantDamage');
  if(s.summonRole)tactical.push('tacticSummonHealer');
  if(s.form)tactical.push(s.form==='modeChoice'?'tacticChooseMode':'tacticForm');
  if(s.alternatives)tactical.push(row.effect.operation==='terrainBuff'?'tacticTerrainChoice':'tacticRandomChoice');
  if(s.knownNextSuper)tactical.push('tacticKnownSuper');
  if(s.mode)tactical.push('tacticExclusiveMode');
 }
 return {transitions,axes,traits,tactical:[...new Set(tactical)],suitability:Math.max(-4,Math.min(4,suitability)),conditional:transitions.filter(t=>t.status==='conditional').length,blocked:transitions.filter(t=>t.status==='blocked').length};
}
window.EffectModels={supports,decode,transition,evaluate,conditionState,aliases,operations:[...dispatch.keys()],conditions:[...conditions]};
})();
