(function(){
const supported=['Gem Grab','Brawl Ball','Knockout','Heist','Hot Zone','Bounty','Wipeout'];
const safe=(n,f=0)=>typeof n==='number'&&Number.isFinite(n)?n:f;
const signature=b=>JSON.stringify([b.gadgets,b.starPowers].map(items=>items.map(g=>[g.id,g.description])));
function abilityProfile(b,ctx,enemy=false){
 const data=ctx.abilities||window.ABILITIES,record=data?.profiles?.[b.id],owned=ctx.collection?.[b.id],handler=window.EffectModels;
 const stale=!!record&&record.signature!==signature(b),effects=new Map(),selected=[],unmodeled=[],models=[];
 const supported=item=>!!handler&&Array.isArray(item?.model)&&item.model.length>0&&item.model.every(handler.supports);
 const add=(item,gearId=null)=>{
  if(!supported(item))return;
  const analysis=handler.evaluate(item.model,{...ctx,activation:item.kind==='gadgets'?'gadgetUsed':null});
  models.push({modelId:item.modelId,gearId,text:item.text,source:item.source,relatedSources:item.relatedSources,kind:item.kind,modeSlot:item.modeSlot,...analysis});
  for(const effect of analysis.traits)if(!effects.has(effect))effects.set(effect,{effect,gearId,text:item.text,source:item.source});
 };
 if(record&&!stale){add(record.base);if(!enemy&&owned?.owned)for(const [field,kind]of [['activeGadget','gadgets'],['activeStar','stars']]){
  const id=owned[field],item=record.gear[id];
  if(item?.kind===kind&&owned[kind]?.includes(id)){selected.push(id);add(item,id);if(!supported(item))unmodeled.push(id);}
 }}
 if(models.some(m=>m.transitions.some(t=>t.status!=='blocked'&&t.changes.nextSuperStun===false)))effects.delete('stun');
 const mode=models.flatMap(m=>m.transitions).find(row=>row.status!=='blocked'&&row.changes.mode)?.changes.mode||null;
 return {id:b.id,effects:[...effects.keys()],evidence:[...effects.values()],selected,unmodeled,stale,models,mode,modeRequired:record?.modeSlots===true&&!mode,covered:!stale&&supported(record?.base),suitability:models.reduce((n,m)=>n+m.suitability,0),sourceDate:data?.sourceDate||null,balanceVersion:data?.balanceVersion||null};
}
function interactions(ps,ctx,byid){
 const ability=ps.map(p=>abilityProfile(byid.get(p.id),ctx)),pairs=[],counters=[];
 const has=(p,key)=>ability.find(a=>a.id===p.id)?.effects.includes(key);
 const note=(key,actor,target,effect)=>({key,actor:actor.id,target:target.id,evidence:ability.find(a=>a.id===actor.id)?.evidence.find(e=>e.effect===effect)});
 let adjustment=0;
 for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){
  const a=ps[i],b=ps[j],good=[],risks=[];
  for(const [actor,target]of [[a,b],[b,a]]){
   if(has(actor,'healAlly')&&(target.hp>=4500||target.entry>=2))good.push(note('abilityHealFront',actor,target,'healAlly'));
   if(has(actor,'teamShield')&&(target.hp>=4500||target.entry>=2))good.push(note('abilityShieldFront',actor,target,'teamShield'));
   if((has(actor,'stun')||has(actor,'pull')||has(actor,'slow'))&&(target.range>=2.4||safe(target.raw.reload)>=1800))good.push(note('abilitySetup',actor,target,['stun','pull','slow'].find(k=>has(actor,k))));
   if(has(actor,'teamSpeed')&&(target.range<2.4||target.speed<680))good.push(note('abilitySpeedEntry',actor,target,'teamSpeed'));
   if(has(actor,'wallBreak')&&target.range>=2.4&&ctx.terrain!=='open'&&ctx.terrain!=='unknown')good.push(note('abilityOpenLane',actor,target,'wallBreak'));
   if(has(actor,'wallBreak')&&has(target,'wallDependent')&&['closed','mixed'].includes(ctx.terrain))risks.push(note('abilityCoverConflict',actor,target,'wallBreak'));
   if(has(actor,'wallCreate')&&target.entry>=2)risks.push(note('abilityWallEntry',actor,target,'wallCreate'));
   if(has(actor,'wallCreate')&&has(target,'overWalls')&&['closed','mixed'].includes(ctx.terrain))good.push(note('abilityWallThrow',actor,target,'wallCreate'));
  }
  const delta=Math.max(-4,Math.min(4,good.length*2-risks.length*2));adjustment+=delta;pairs.push({ids:[a.id,b.id],good,risks,delta});
 }
 for(const eid of ctx.enemies||[]){const enemy=byid.get(eid);if(!enemy)continue;const ep=profile(enemy,ctx.mechanics,ctx.profiles),ea=abilityProfile(enemy,ctx,true);
  for(const p of ps){
   if(has(p,'antiHeal')&&ea.effects.includes('healAlly'))counters.push({...note('abilityAntiHeal',p,ep,'antiHeal'),delta:2});
   if(has(p,'antiTank')&&ep.hp>=4500)counters.push({...note('abilityAntiTank',p,ep,'antiTank'),delta:2});
   if(has(p,'immunity')&&ea.effects.some(k=>['stun','slow','pull','knockback'].includes(k)))counters.push({...note('abilityImmunity',p,ep,'immunity'),delta:2});
   if(has(p,'knockback')&&ep.range<1.5)counters.push({...note('abilityPushBack',p,ep,'knockback'),delta:2});
   if(ea.effects.includes('antiHeal')&&has(p,'healAlly'))counters.push({key:'abilityEnemyAntiHeal',actor:eid,target:p.id,evidence:ea.evidence.find(e=>e.effect==='antiHeal'),delta:-2});
  }
 }
 adjustment+=counters.reduce((sum,c)=>sum+c.delta,0);
 // The kit component assesses available qualitative utility; it is not a simulated activation.
 const kitAdjustment=Number(Math.max(-4,Math.min(4,ability.reduce((n,a)=>n+a.suitability,0)/Math.max(1,ability.length))).toFixed(2));
 return {profiles:ability,pairs,counters,kitAdjustment,adjustment:Number(Math.max(-10,Math.min(10,adjustment+kitAdjustment)).toFixed(2))};
}
function profile(b,mechanics,overrides={}){const raw=mechanics[b.id]||{},custom=overrides[b.id]||{};const cls=b.class.name;const range=Number.isFinite(raw.range)&&raw.range>0?Math.min(3,raw.range/10):cls==='Marksman'?3:['Tank','Assassin'].includes(cls)?0.7:1.7;return {id:b.id,cls,range,speed:safe(raw.speed,720),hp:safe(raw.hp,3000),control:['Controller','Artillery'].includes(cls)?3:cls==='Tank'?1:0,support:cls==='Support'?3:0,entry:['Assassin','Tank'].includes(cls)?2:0,pressure:cls==='Damage Dealer'?3:cls==='Support'?1:2,raw:raw,...(['open','closed','mixed'].includes(custom.terrain)?{}:{}),reviewed:custom.reviewed===true,...Object.fromEntries(['range','speed','hp','control','support','entry','pressure'].filter(k=>typeof custom[k]==='number'&&Number.isFinite(custom[k])&&custom[k]>=0&&custom[k]<=10000).map(k=>[k,custom[k]]))}}
function evaluate(ids,ctx){const byid=new Map(ctx.brawlers.map(b=>[b.id,b]));const ps=ids.filter(id=>byid.has(id)).map(id=>profile(byid.get(id),ctx.mechanics,ctx.profiles));if(!ps.length)return {score:0,good:[],risks:['chooseFirst'],parts:[],profiles:[]};const n=ps.length,has=k=>ps.some(p=>p[k]>=2),distinct=new Set(ps.map(p=>p.cls)).size/n;const ranged=ps.filter(p=>p.range>=2.4).length;let terrain=12;if(ctx.terrain==='open')terrain=Math.round(25*ps.reduce((s,p)=>s+Math.min(1,p.range/3),0)/n);if(ctx.terrain==='closed')terrain=Math.round(25*ps.reduce((s,p)=>s+(p.control>=2?1:p.entry>=2?.8:.35),0)/n);if(ctx.terrain==='mixed')terrain=Math.round(12+13*distinct);let objective=12;
if(['Gem Grab','Hot Zone'].includes(ctx.mode))objective=(has('control')?15:4)+(has('support')||ranged?10:3);
if(ctx.mode==='Brawl Ball')objective=(has('entry')?12:3)+(has('pressure')?7:2)+(has('control')||has('support')?6:1);
if(['Knockout','Bounty','Wipeout'].includes(ctx.mode))objective=(ranged?14:3)+(has('control')||has('support')?11:3);
if(ctx.mode==='Heist')objective=Math.round(25*ps.reduce((s,p)=>s+p.pressure,0)/(n*3));
const roles=Math.round(25*distinct),coverage=(ranged?8:2)+(has('control')?8:2)+(has('support')||has('entry')?9:2);let score=Math.min(95,roles+terrain+objective+coverage);const good=[],risks=[];if(ranged)good.push('rangeCovered');else risks.push('noRange');if(has('control'))good.push('controlCovered');else risks.push('noControl');if(has('support'))good.push('supportCovered');if(ps.some(p=>p.speed<680))risks.push('lowMobility');if(ctx.terrain==='unknown')risks.push('unknown');if(!risks.length)risks.push('noGuarantee');
let enemyPressure=0;for(const eid of ctx.enemies||[]){const e=byid.get(eid);if(!e)continue;const ep=profile(e,ctx.mechanics,ctx.profiles);if(ep.range>=2.4&&!ranged)enemyPressure+=4;if(ep.entry>=2&&!has('control'))enemyPressure+=3;}let hintBonus=0;for(const eid of ctx.enemies||[]){const e=byid.get(eid);if(e&&ps.some(p=>Array.isArray(p.raw.counterClasses)&&p.raw.counterClasses.includes(e.class.name)))hintBonus+=2;}score=Math.min(95,Math.max(10,score-Math.min(15,enemyPressure)+Math.min(4,hintBonus)));
const abilities=interactions(ps,ctx,byid);score=Math.round(Math.min(95,Math.max(10,score+abilities.adjustment)));
return {score,good,risks,abilities,parts:[roles,terrain,objective,coverage],profiles:ps,reviewed:ps.every(p=>p.reviewed),rawCoverage:ps.filter(p=>Object.keys(p.raw).length).length}}
function candidates(team,ctx,ownedOnly=false,collection={}){const exclude=new Set([...team,...(ctx.bans||[]),...(ctx.enemies||[])]);return ctx.brawlers.filter(b=>b.released&&!exclude.has(b.id)&&(!ownedOnly||collection[b.id]?.owned)).map(b=>{const a=evaluate([...team,b.id],{...ctx,collection:ownedOnly?collection:ctx.collection});const level=collection[b.id]?.level;let effective=a.score;if(ownedOnly&&Number.isInteger(level))effective-=Math.max(0,11-level)*1.5;return {added:[b.id],ids:[...team,b.id],score:a.score,effective,result:a}}).sort((a,b)=>b.effective-a.effective||a.added[0]-b.added[0])}
function complete(team,ctx,ownedOnly,collection){if(team.length===2)return candidates(team,ctx,ownedOnly,collection);if(team.length!==1)return [];const pool=candidates(team,ctx,ownedOnly,collection).map(x=>x.added[0]),out=[];for(let i=0;i<pool.length;i++)for(let j=i+1;j<pool.length;j++){const ids=[...team,pool[i],pool[j]],r=evaluate(ids,{...ctx,collection:ownedOnly?collection:ctx.collection});let effective=r.score;if(ownedOnly)for(const id of [pool[i],pool[j]])effective-=Math.max(0,11-(collection[id]?.level||11))*1.5;out.push({ids,added:[pool[i],pool[j]],result:r,score:r.score,effective})}return out.sort((a,b)=>b.effective-a.effective||a.added[0]-b.added[0])}
window.Engine={profile,abilityProfile,evaluate,candidates,complete,supported};})();
