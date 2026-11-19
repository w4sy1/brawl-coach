const vm=require('vm'),fs=require('fs'),ts=require('typescript'),assert=require('assert');
let text=fs.readFileSync(require('path').join(__dirname,'../app/api/coach/[...path]/route.ts'),'utf8').replace(/^import .*$/gm,'').replace(/export const /g,'const ');text+='\nObject.assign(globalThis,{GET,POST,PUT});';text=ts.transpileModule(text,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.None}}).outputText;
let user=null;const records=new Map();const db={prepare(){let args=[];return {bind(...a){args=a;return this},async first(){return records.get(args[0]+':'+args[1])||null},async run(){return {meta:{changes:1}}}}}};
let upstream=0;const env={DB:db,ADMIN_EMAIL:'owner@example.com',PRIVATE_UPDATES:'1'};
const c={env,getChatGPTUser:async()=>user,Response,URL,AbortSignal,fetch:async()=>{upstream++;throw Error('offline')}};vm.createContext(c);vm.runInContext(text,c);
const post=(p,headers={})=>new Request('https://site.test/api/coach/'+p,{method:'POST',headers:{Origin:'https://site.test','Content-Type':'application/json',...headers},body:'{}'});
(async()=>{
 records.set('cache:brawlers',{value:'{"list":[]}',revision:1,updated_at:Date.now()-60000});
 let r=await c.POST(post('tasks/refresh'));assert.equal(r.status,429,'anonymous refresh inside 15 min is throttled');assert.equal(upstream,0);
 user={userId:'x',email:'someone@example.com'};assert.equal((await c.POST(post('tasks/refresh'))).status,403,'signed-in non-admin');user=null;
 env.CRON_SECRET='s3cret';records.set('cache:brawlers',{value:'{"list":[]}',revision:1,updated_at:0});
 assert.equal((await c.POST(post('tasks/refresh'))).status,403,'missing cron secret');
 assert.equal((await c.POST(post('tasks/refresh',{'x-cron-secret':'bad'}))).status,403,'wrong cron secret');
 r=await c.POST(post('tasks/refresh',{'x-cron-secret':'s3cret'}));assert.notEqual(r.status,403);assert.ok(upstream>0,'valid secret reaches upstream');
 records.set('cache:brawlers',{value:'{broken',revision:1,updated_at:0});records.set('cache:maps',{value:'{"list":[]}',revision:1,updated_at:0});
 r=await c.GET(new Request('https://site.test/api/coach/catalog'));assert.equal(r.status,404,'corrupted cache record is treated as missing');
 console.log('PASS: refresh throttling, cron secret, non-admin rejection, corrupted cache record handling.');
})().catch(e=>{console.error(e);process.exit(1)});
