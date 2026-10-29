// Read-only freshness check; never replaces reviewed source or updates the lock.
import fs from 'node:fs';
import path from 'node:path';
import {loadInputs,project} from './effect-data.mjs';
const {catalog}=loadInputs();
const load=async url=>{const r=await fetch(url,{signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error('Source HTTP '+r.status);return r.json();};
const [live,texts]=await Promise.all([load('https://api.brawlapi.com/v1/brawlers'),load('https://api.brawlapi.com/game/localization/texts')]);
const mechanics=JSON.parse(fs.readFileSync(path.join(project,'public/coach/mechanics.json'),'utf8'));
const localTips=JSON.parse(fs.readFileSync(path.join(project,'public/coach/locales/en.json'),'utf8')).tips;
const changes=[];const ids=new Set(catalog.brawlers.map(b=>b.id));
for(const b of catalog.brawlers){
 const current=live.list.find(x=>x.id===b.id);if(!current){changes.push({id:b.id,reason:'missingBrawler'});continue;}
 for(const kind of ['gadgets','starPowers']){
  if(current[kind].length!==b[kind].length)changes.push({id:b.id,reason:'itemCount',kind});
  for(const item of b[kind]){const g=current[kind].find(x=>x.id===item.id);if(!g||g.name!==item.name||g.description!==item.description)changes.push({id:item.id,reason:'equipmentSource'});}
 }
 const tip=texts[mechanics[b.id].tid+'_SHORT_DESC']?.EN||'';
 if(tip!==(localTips[b.id]||''))changes.push({id:b.id,reason:'baseTip'});
}
for(const b of live.list)if(!ids.has(b.id))changes.push({id:b.id,reason:'newBrawler'});
const result={checkedAt:new Date().toISOString(),snapshotDate:catalog.fetchedAt,source:'https://api.brawlapi.com',liveBrawlers:live.list.length,liveEquipment:live.list.reduce((n,b)=>n+b.gadgets.length+b.starPowers.length,0),changes,status:changes.length?'REVIEW_REQUIRED':'MATCH'};
if(process.argv.includes('--write'))fs.writeFileSync(path.join(project,'docs/EFFECT-SOURCE-CHECK.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result));
if(changes.length)process.exitCode=1;
