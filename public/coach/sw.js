const VERSION='coach-v6-full-effect-models-1';
const CORE=['index.html','app.css','release.css','app.js','engine.js','effects.js','abilities.js','i18n.js','catalog.js','mechanics.json','geometry.json','icon.svg','icon-192.png','icon-512.png','manifest.webmanifest',...['pl','en','de','fr','ru','es','ko','it'].map(lang=>'locales/'+lang+'.json')];
const base=new URL('./',self.location).href;
const coreURLs=new Set(CORE.map(x=>new URL(x,base).href));
self.addEventListener('install',event=>event.waitUntil(caches.open(VERSION).then(c=>c.addAll([...coreURLs])).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('coach-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const u=new URL(event.request.url);
 if(event.request.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(base))return;
 // Only public application files. Account APIs and unrelated pages never enter this cache.
 const clean=new URL(u.pathname,u.origin).href;
 const key=clean===base?new URL('index.html',base).href:clean;
 const core=coreURLs.has(key),portrait=u.pathname.startsWith(new URL('assets/brawlers/',base).pathname);
 if(!core&&!portrait)return;
 event.respondWith((async()=>{
  const cache=await caches.open(VERSION),stored=await cache.match(key);
  if(stored)return stored;
  try{const response=await fetch(event.request);if(response.ok&&!response.redirected&&response.type!=='opaque')await cache.put(key,response.clone());return response;}
  catch{return new Response('Offline',{status:503});}
 })());
});
