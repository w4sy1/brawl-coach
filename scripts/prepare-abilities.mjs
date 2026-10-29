// Compile explicitly reviewed semantic models. A missing model or changed source is an error.
import fs from 'node:fs';
import path from 'node:path';
import {loadInputs,verifySourceLock,root,project,digest} from './effect-data.mjs';
const {catalog,models,records,effects}=loadInputs();
const lock=JSON.parse(fs.readFileSync(path.join(project,'data/effect-source-lock.json'),'utf8'));
verifySourceLock(records,lock);
const signature=b=>JSON.stringify([b.gadgets,b.starPowers].map(items=>items.map(g=>[g.id,g.description])));
const compile=r=>({modelId:r.id,model:r.model,effects:[...new Set(r.model.map(e=>effects.aliases[e.type+':'+e.operation]).filter(Boolean))],text:r.text,source:r.source,sourceHash:digest({name:r.name,text:r.text}),kind:r.kind,modeSlot:r.modeSlot===true,historical:r.historical===true});
const profiles={};
for(const [id,row]of models)profiles[id]={signature:signature(row.b),base:compile(row.base),gear:Object.fromEntries(row.gear.map(g=>[g.gearId,{...compile(g),relatedSources:g.modeSlot?[g.source,row.base.source]:[g.source]}])),modeSlots:row.gear.some(g=>g.modeSlot)};
const totals={base:models.size,equipment:[...models.values()].reduce((n,p)=>n+p.gear.length,0)};
const data={schema:2,method:'explicit-semantic-ledger-v2',sourceDate:catalog.fetchedAt,reviewedOn:lock.reviewedOn,balanceVersion:null,totals,profiles};
fs.writeFileSync(path.join(root,'abilities.js'),'window.ABILITIES='+JSON.stringify(data,null,2)+';\n');
console.log('Compiled sourced semantic models: '+totals.base+'/'+catalog.brawlers.length+' base, '+totals.equipment+'/'+catalog.brawlers.reduce((n,b)=>n+b.gadgets.length+b.starPowers.length,0)+' equipment entries. Every operation has a validated handler; runtime coverage is tested separately.');
