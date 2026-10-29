const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const root=path.join(__dirname,'../public/coach'),c={};c.window=c;vm.createContext(c);
for(const f of ['catalog.js','effects.js','abilities.js','engine.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),c);
const bs=c.CATALOG.brawlers,mechanics=JSON.parse(fs.readFileSync(path.join(root,'mechanics.json')));
const ctx={brawlers:bs,mechanics,profiles:{},terrain:'mixed',mode:'Gem Grab',collection:{},enemies:[],bans:[]};
const report={schema:1,sourceDate:c.ABILITIES.sourceDate,scope:'Sourced qualitative semantic models, not empirical match or numeric simulation coverage',totals:{base:0,equipment:0,actions:0},entries:[]};
const json=x=>JSON.stringify(x),B=name=>bs.find(b=>b.name===name);
const runtime=(b,gear,extra={})=>{
 const record={owned:true,level:11,gadgets:b.gadgets.map(g=>g.id),stars:b.starPowers.map(g=>g.id)};
 if(gear)record[b.gadgets.some(g=>g.id===gear.id)?'activeGadget':'activeStar']=gear.id;
 return c.Engine.evaluate([b.id],{...ctx,...extra,collection:gear?{[b.id]:record}:extra.collection||{}}).abilities.profiles[0];
};
(async()=>{
 const {loadInputs,verifySourceLock,project}=await import('../scripts/effect-data.mjs');
 const source=loadInputs();verifySourceLock(source.records,JSON.parse(fs.readFileSync(path.join(project,'data/effect-source-lock.json'))));
 for(const b of bs){
  const p=runtime(b);assert.ok(p.covered&&!p.stale,b.name+' base must be covered');
  for(const [item,gear]of [[c.ABILITIES.profiles[b.id].base,null],...[...b.gadgets,...b.starPowers].map(g=>[c.ABILITIES.profiles[b.id].gear[g.id],g])]){
   const tag=gear?'gear:'+gear.id:'base:'+b.id,live=runtime(b,gear),model=live.models.find(m=>m.modelId===tag);
   assert.ok(model,tag+' must pass through Engine.evaluate');assert.ok(item.model.length>0);assert.equal(item.text,source.records.get(tag).text);assert.equal(item.source,source.records.get(tag).source);
   assert.equal(model.transitions.length,item.model.length,tag+' all operations executed');
   const scenario=Object.fromEntries(item.model.filter(e=>e.condition!=='always').map(e=>[e.condition,true]));scenario.gadgetUsed=true;
   const active=runtime(b,gear,{scenario}).models.find(m=>m.modelId===tag);
   assert.ok(active.transitions.every(t=>t.status==='ready'),tag+' satisfied conditions execute');
   const consumers=new Set();
   for(const effect of item.model){
    assert.ok(c.EffectModels.supports(effect),tag+' typed handler');
    const single=c.EffectModels.evaluate([effect],{...ctx,scenario}),step=single.transitions[0];
    assert.ok(Object.keys(step.changes).length,tag+' real state transition');
    assert.ok(single.suitability!==0||single.tactical.length,tag+' consumed by ranking or specific tactical advice: '+step.key);
    consumers.add(single.suitability!==0?'ranking':'tactics');
    if(effect.condition!=='always'){
     const blocked=runtime(b,gear,{scenario:{...scenario,[effect.condition]:false}}).models.find(m=>m.modelId===tag);
     for(const t of blocked.transitions.filter(t=>t.effect.condition===effect.condition)){assert.equal(t.status,'blocked');assert.equal(Object.keys(t.changes).length,0,'Unmet condition contributes nothing');}
     const unknown=runtime(b,gear).models.find(m=>m.modelId===tag).transitions.find(t=>json(t.effect)===json(effect));assert.equal(unknown.status,'conditional',tag+' unknown trigger is not confirmed');
    }
    report.totals.actions++;
   }
   if(gear&&item.kind==='gadgets'){const blocked=runtime(b,gear,{scenario:{...scenario,gadgetUsed:false}}).models.find(m=>m.modelId===tag);assert.equal(blocked.blocked,item.model.length,'Unused gadget cannot be treated as active');assert.equal(blocked.suitability,0);}
   if(gear){assert.ok(live.selected.includes(gear.id));report.totals.equipment++;}else report.totals.base++;
   report.entries.push({id:gear?.id||b.id,brawlerId:b.id,name:gear?.name||b.name,kind:gear?(item.modeSlot?'mode':item.kind):'base',sourceVerified:true,handlerCount:item.model.length,runtimeTransitions:active.transitions.map(t=>t.key),consumers:[...consumers],conditionalCases:item.model.filter(e=>e.condition!=='always').length,gadgetGateChecked:item.kind==='gadgets',status:'PASS'});
  }
 }
 // Independent semantic regressions, rather than only comparing the model to itself.
 const transition=token=>c.EffectModels.transition(c.EffectModels.decode(token));
 assert.equal(transition('projectile:reverseOrder').changes.attackSequence,'reverse');
 assert.equal(c.EffectModels.evaluate([c.EffectModels.decode('projectile:reverseOrder')],ctx).suitability,0,'Reversing egg order is not free damage');
 assert.equal(transition('projectile:fixedRange').changes.rangePolicy,'unchanged');
 assert.equal(transition('control:stasis').changes.targetInvulnerable,true);assert.ok(!transition('control:stasis').traits.includes('stun'));
 assert.equal(transition('control:sleep').changes.breakOnDamage,true);
 assert.equal(transition('cost:action').changes.canAttack,false);assert.ok(transition('cost:health').changes.durability<0);assert.ok(transition('cost:ammo').changes.uptime<0);
 const random=c.EffectModels.evaluate([c.EffectModels.decode('choice:randomBuff')],ctx);assert.equal(random.suitability,0);assert.equal(random.transitions[0].changes.alternatives.length,1,'Do not sum imagined random buffs');
 const buzz=B('Buzz Lightyear'),modes=buzz.starPowers.map(g=>runtime(buzz,g));assert.ok(modes.every(m=>!m.modeRequired&&m.selected.length===1));assert.equal(new Set(modes.map(m=>m.mode)).size,3);assert.ok(modes.every(m=>m.models.filter(x=>x.modeSlot).length===1),'Modes are mutually exclusive');
 assert.equal(modes[0].models.find(m=>m.modeSlot).transitions[0].changes.attackStyle,'rangedBurn');assert.equal(modes[1].models.find(m=>m.modeSlot).transitions[0].changes.attackStyle,'meleeDash');
 const barley=B('Barley'),medical=barley.starPowers.find(g=>g.name==='Medical Use');assert.ok(!runtime(barley,medical).effects.includes('healAlly'),'Medical Use heals self, not allies');
 const buzzB=B('Buzz'),buoy=buzzB.gadgets.find(g=>g.name==='Reserve Buoy');assert.ok(!runtime(buzzB,buoy).effects.includes('stun'),'Reserve Buoy removes next Super stun');
 // No effect from an owned but unselected item, and invalid models/source locks fail closed.
 const owned={owned:true,level:11,gadgets:barley.gadgets.map(g=>g.id),stars:barley.starPowers.map(g=>g.id)};assert.equal(runtime(barley,null,{collection:{[barley.id]:owned}}).models.length,1);
 const bad=JSON.parse(JSON.stringify(c.ABILITIES));bad.profiles[barley.id].base.model[0].operation='unsupported';assert.ok(!runtime(barley,null,{abilities:bad}).covered);
 const mutated=new Map(source.records),first=mutated.values().next().value;mutated.set(first.id,{...first,text:first.text+' changed'});assert.throws(()=>verifySourceLock(mutated,JSON.parse(fs.readFileSync(path.join(project,'data/effect-source-lock.json')))),/Source changed/);
 assert.equal(report.totals.base,109);assert.equal(report.totals.equipment,436);assert.equal(report.entries.length,545);assert.ok(report.entries.every(e=>e.status==='PASS'));
 if(process.argv.includes('--write'))fs.writeFileSync(path.join(__dirname,'../docs/EFFECT-COVERAGE.json'),JSON.stringify(report,null,2)+'\n');
 console.log(`PASS: ${report.totals.base}/109 base models, ${report.totals.equipment}/436 equipment entries; ${report.totals.actions} typed operations exercised through Engine.evaluate; source locks, conditions, tactical consumers, costs and exclusive modes.`);
})().catch(e=>{console.error(e);process.exitCode=1});
