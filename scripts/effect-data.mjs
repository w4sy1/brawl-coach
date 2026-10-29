import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
export const project=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export const root=path.join(project,'public/coach');
export const digest=value=>createHash('sha256').update(typeof value==='string'?value:JSON.stringify(value)).digest('hex');
export function loadInputs(){
 const c={};c.window=c;vm.createContext(c);
 for(const file of ['catalog.js','effects.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),c);
 const english=JSON.parse(fs.readFileSync(path.join(root,'locales/en.json'),'utf8'));
 const overrides=JSON.parse(fs.readFileSync(path.join(project,'data/effect-overrides.json'),'utf8'));
 const rows=fs.readFileSync(path.join(project,'data/effect-models.tsv'),'utf8').split(/\r?\n/).filter(line=>line.trim()&&!line.startsWith('#')).map(line=>line.split('|'));
 const models=new Map(),records=new Map();
 for(const [suffix,name,...slots]of rows){
  const id=16000000+Number(suffix),b=c.CATALOG.brawlers.find(b=>b.id===id);
  if(!b||b.name!==name||models.has(id))throw Error('Unknown, renamed or duplicate brawler '+id+' '+name);
  const items=[...b.gadgets,...b.starPowers];
  if(slots.length!==items.length+1)throw Error('Wrong equipment slot count '+name);
  const base=overrides[id]||{text:english.tips[id],source:'https://api.brawlapi.com/game/localization/texts'};
  if(!base.text?.trim())throw Error('Missing sourced base description '+name);
  const inputs=[{id:'base:'+id,name:b.name,text:base.text,source:base.source,kind:'base',...base},...items.map(g=>({id:'gear:'+g.id,name:g.name,text:g.description,source:'https://api.brawlapi.com/v1/brawlers/'+b.id,kind:b.gadgets.some(x=>x.id===g.id)?'gadgets':'stars',gearId:g.id,modeSlot:!!overrides[id]?.modeSlots&&b.starPowers.some(x=>x.id===g.id)}))];
  const compiled=slots.map((slot,index)=>{
   if(!slot.trim())throw Error('Empty model '+inputs[index].id);
   const model=slot.split(';').map(c.EffectModels.decode),input=inputs[index];
   if(!input.text?.trim()||records.has(input.id))throw Error('Missing or duplicate source '+input.id);
   const record={...input,model};records.set(input.id,record);return record;
  });
  models.set(id,{b,base:compiled[0],gear:compiled.slice(1)});
 }
 if(models.size!==c.CATALOG.brawlers.length)throw Error('The ledger does not cover the catalog');
 return {catalog:c.CATALOG,models,records,effects:c.EffectModels};
}
export function sourceIdentity(record){return {name:record.name,text:record.text,source:record.source,kind:record.kind,modeSlot:record.modeSlot===true};}
export function verifySourceLock(records,lock){
 if(lock.schema!==1||Object.keys(lock.entries).length!==records.size)throw Error('Source lock has the wrong shape or count');
 for(const [id,record]of records)if(lock.entries[id]!==digest(sourceIdentity(record)))throw Error('Source changed or was not reviewed: '+id+' '+record.name);
}
