const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const root=path.join(__dirname,'../public/coach'),elements={},storage=new Map();
const el=()=>({innerHTML:'',textContent:'',value:'',hidden:false,dataset:{},classList:{add(){},remove(){},contains(){return true},toggle(){}},setAttribute(){},querySelector(){return el()},querySelectorAll(){return[]},scrollIntoView(){},focus(){},click(){}});
const c={console,document:{getElementById:id=>elements[id]||=el(),documentElement:{},querySelectorAll(){return[]},addEventListener(){},createElement:el},navigator:{language:'pl-PL'},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},AbortSignal,URL,Blob,setTimeout,clearTimeout,scrollTo(){}};c.window=c;vm.createContext(c);
for(const file of ['catalog.js','effects.js','abilities.js','i18n.js','engine.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),c);
c.COPY=new Proxy(c.COPY,{get(target,key){assert.ok(key in target,'Missing UI translation key: '+String(key));return target[key]}});
let app=fs.readFileSync(path.join(root,'app.js'),'utf8');vm.runInContext(app.slice(0,app.lastIndexOf('boot();')),c);
const run=s=>vm.runInContext(s,c),pack=lang=>JSON.parse(fs.readFileSync(path.join(root,'locales/'+lang+'.json')));
c.mechanicsFixture=JSON.parse(fs.readFileSync(path.join(root,'mechanics.json')));run('mechanics=mechanicsFixture');
(async()=>{
 c.fetch=async url=>({ok:true,json:async()=>pack(String(url).match(/(\w+)\.json/)[1])});
 for(const language of c.LOCALE_ORDER){
  run(`lang='${language}';state.language=lang`);await run('loadGameLocale()');assert.equal(run('localeError'),false);
  assert.equal(run('loadedLocale'),language);
  for(const route of ['home','maps','brawlers','team','draft','compare','meta','news','settings','admin'])run(`route='${route}';render()`);
  run("route='team';state.team=[16000003,16000037,16000010];state.display='advanced';analysisView(state.team)");
  for(const b of c.CATALOG.brawlers)run(`openProfile(${b.id});equipmentView(${b.id})`);
  const shelly=c.CATALOG.brawlers.find(b=>b.name==='Shelly');
  run("ownedOnly=false;statusFilter='all';roleFilter='all';search='Shelly'");assert.ok(run('brawlerResults()').some(b=>b.id===shelly.id),'English search '+language);
  run(`search=bName(bBy(${shelly.id}))`);assert.ok(run('brawlerResults()').some(b=>b.id===shelly.id),'Local search '+language);
  assert.ok(run(`sourceDescription(gameBios[${shelly.id}],true)`).includes('lang="'+language+'"'));
 }
 const deferred={};c.fetch=url=>new Promise(resolve=>{deferred[url]=resolve});
 run("changeLanguage('de')");run("changeLanguage('ko')");
 deferred['locales/ko.json']({ok:true,json:async()=>pack('ko')});await new Promise(setImmediate);
 deferred['locales/de.json']({ok:true,json:async()=>pack('de')});await new Promise(setImmediate);
 assert.equal(run('loadedLocale'),'ko','Out-of-order response must not overwrite current language');
 c.fetch=async()=>{throw Error('Offline')};run("lang='fr'");await run('loadGameLocale()');
 assert.equal(run('localeError'),true);assert.equal(run('localeLoading'),false);assert.equal(run('Object.keys(gameGear).length'),0,'No stale gear after failure');assert.ok(elements.connection.innerHTML.includes(c.COPY.localeErrorText[3]));
 c.fetch=async()=>({ok:true,json:async()=>({tips:[]})});await run('loadGameLocale()');assert.equal(run('localeError'),true,'Malformed pack rejected');
 c.fetch=async()=>({ok:true,json:async()=>pack('fr')});await run('loadGameLocale()');assert.equal(run('loadedLocale'),'fr');assert.equal(run('localeError'),false,'Retry recovers');
 const b=c.CATALOG.brawlers.find(b=>b.name==='Barley'),g=b.gadgets[0].id;
 const value=run(`validateState({language:'pl',display:'simple',collection:{'${b.id}':{owned:true,level:11,gadgets:[${g}],stars:[],activeGadget:${g},activeStar:23000331}},team:[]})`);
 assert.equal(value.collection[b.id].activeGadget,g);assert.equal(value.collection[b.id].activeStar,null,'Foreign star rejected on import');
 run(`state.collection['${b.id}']={owned:true,level:11,gadgets:[${g}],stars:[],activeGadget:${g}};suggestions=[{}];editEquipment(${b.id},'gadgets',${g},false)`);
 assert.equal(run(`state.collection['${b.id}'].activeGadget`),null,'Removing owned gadget clears active loadout');assert.equal(run('suggestions.length'),0,'Equipment edits invalidate suggestions');
 await testServiceWorker();console.log('PASS: 8 language packs, 10 routes, all profiles and equipment dialogs, translated/English search, placeholder keys, async language races, offline errors, malformed packs, retries and active-loadout import; service-worker offline cache for all languages and account API exclusion.');
})().catch(e=>{console.error(e);process.exitCode=1});
async function testServiceWorker(){
 const handlers={},stores=new Map(),offline={value:false},origin='https://coach.test';let network=0;
 const caches={async open(name){if(!stores.has(name))stores.set(name,new Map());const store=stores.get(name);return {async addAll(urls){for(const url of urls){const local=path.join(root,new URL(url).pathname.replace('/coach/',''));assert.ok(fs.existsSync(local),'Precache path exists: '+url);store.set(url,new Response(fs.readFileSync(local)));}},async match(url){return store.get(url)?.clone()},async put(url,response){store.set(url,response)}}},async keys(){return [...stores.keys()]},async delete(key){return stores.delete(key)}};
 stores.set('coach-old',new Map());stores.set('other-application',new Map());
 const w={self:{location:new URL(origin+'/coach/sw.js'),addEventListener:(key,cb)=>handlers[key]=cb,skipWaiting:async()=>{},clients:{claim:async()=>{}}},caches,URL,Response,fetch:async()=>{network++;if(offline.value)throw Error('Offline');return new Response('network')}};
 vm.runInNewContext(fs.readFileSync(path.join(root,'sw.js'),'utf8'),w);
 let pending;handlers.install({waitUntil:p=>pending=p});await pending;handlers.activate({waitUntil:p=>pending=p});await pending;
 assert.ok(!stores.has('coach-old'));assert.ok(stores.has('other-application'));
 offline.value=true;
 for(const route of ['/coach/','/coach/index.html?launch=pwa','/coach/effects.js','/coach/abilities.js',...c.LOCALE_ORDER.map(l=>'/coach/locales/'+l+'.json')]){
  let response;handlers.fetch({request:new Request(origin+route),respondWith:p=>response=p});assert.ok(response,route);assert.equal((await response).status,200,route);
 }
 assert.equal(network,0,'Cached application and languages work without network');
 for(const route of ['/api/coach/state','/api/coach/session','/coach/private-record','/unrelated']){let intercepted=false;handlers.fetch({request:new Request(origin+route),respondWith(){intercepted=true}});assert.equal(intercepted,false,'Never cache '+route);}
 let response;handlers.fetch({request:new Request(origin+'/coach/assets/brawlers/missing.png'),respondWith:p=>response=p});assert.equal((await response).status,503,'Missing portrait fails explicitly');
}
