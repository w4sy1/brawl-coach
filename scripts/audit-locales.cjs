const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const root=path.join(__dirname,'../public/coach'),c={window:{}};
for(const file of ['catalog.js','i18n.js'])vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),c);
const {CATALOG:catalog,COPY:copy,LOCALE_ORDER:languages}=c.window;
const mechanics=JSON.parse(fs.readFileSync(path.join(root,'mechanics.json')));
const english=JSON.parse(fs.readFileSync(path.join(root,'locales/en.json'))),report={sourceDate:catalog.fetchedAt,languages:{}};
for(const [key,values]of Object.entries(copy)){
 assert.equal(values.length,languages.length,key);
 const parameters=s=>[...s.matchAll(/\{(\w+)\}/g)].map(m=>m[1]).sort().join(',');
 for(const [i,value]of values.entries()){assert.ok(typeof value==='string'&&value.trim(),key+':'+languages[i]);assert.equal(parameters(value),parameters(values[0]),'Placeholders '+key+':'+languages[i]);}
}
for(const lang of languages){
 const p=JSON.parse(fs.readFileSync(path.join(root,'locales/'+lang+'.json'))),missingTips=[],sameMapNames=[];
 for(const b of catalog.brawlers){
  assert.ok(p.aliases[mechanics[b.id].tid]?.trim(),'Name '+lang+':'+b.id);
  assert.ok(p.bios[b.id]?.trim(),'Bio '+lang+':'+b.id);
  if(!p.tips[b.id]?.trim())missingTips.push({id:b.id,name:b.name});
  for(const g of [...b.gadgets,...b.starPowers]){assert.ok(p.gear[g.id]?.name?.trim(),'Equipment name '+lang+':'+g.id);assert.ok(p.gear[g.id]?.description?.trim(),'Equipment description '+lang+':'+g.id);}
 }
 for(const m of catalog.maps){assert.ok(p.mapNames[m.id]?.trim(),'Map '+lang+':'+m.id);if(p.mapNames[m.id]===english.mapNames[m.id])sameMapNames.push(m.id);}
 // A documented source gap must be the same in every language, never a hidden dropped translation.
 assert.equal(JSON.stringify(missingTips),JSON.stringify(catalog.brawlers.filter(b=>!english.tips[b.id]?.trim()).map(b=>({id:b.id,name:b.name}))));
 report.languages[lang]={uiKeys:Object.keys(copy).length,brawlers:catalog.brawlers.length,bios:Object.keys(p.bios).length,equipment:Object.keys(p.gear).length,maps:catalog.maps.length,missingTips,mapNamesEqualToEnglish:sameMapNames.length};
}
report.note='Identical map names may be official proper names; equality alone is not evidence of a missing translation. Missing game text is shown with an explicit fallback. This is a structural audit, not native-speaker linguistic approval.';
if(process.argv.includes('--write'))fs.writeFileSync(path.join(__dirname,'../docs/LOCALE-AUDIT.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
