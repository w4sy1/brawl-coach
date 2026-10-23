import json,re,pathlib,collections,os,time
root=pathlib.Path(__file__).resolve().parents[1]/'public/coach';catalog=json.loads((root/'catalog.js').read_text().removeprefix('window.CATALOG=').rstrip(';'))
base=pathlib.Path(os.environ.get('BC_GAME_CACHE','/tmp'));raw={name:json.load(open(base/file)) for name,file in [('maps','bc-maps.json'),('locations','bc-csv_logic-locations.json'),('tiles','bc-csv_logic-tiles.json'),('cards','bc-csv_logic-cards.json')]};mechanics=json.loads((root/'mechanics.json').read_text());cards={c['id']:c for c in raw['cards'].values()};locs={x['id']:x for x in raw['locations'].values()}
def clean(s):return re.sub(r'\s+',' ',re.sub(r'<[^>]*>',lambda m:'x' if m.group().startswith('<!') else '',s or '')).strip()
def get(row):return next((v for k,v in row.items() if k not in ['id','TID','Name'] and isinstance(v,str)), '') if isinstance(row,dict) else ''
eng=json.load(open(base/'bc-localization-texts.json'));wanted=set()
for b in catalog['brawlers']:
 tid=mechanics.get(str(b['id']),{}).get('tid');wanted.update([tid,tid+'_DESC',tid+'_SHORT_DESC'] if tid else [])
 for g in b['gadgets']+b['starPowers']:
  tid=cards.get(g['id'],{}).get('TID');wanted.update([tid,tid+'_DESC'] if tid else [])
for loc in locs.values():wanted.add(loc.get('TID'))
# Mode names and all names used in the catalog, preserving exact game translations.
texts={x['name'].lower() for x in catalog['maps']}|{x['gameMode']['name'].lower() for x in catalog['maps']}
for tid,row in eng.items():
 if clean(get(row)).lower() in texts:wanted.add(tid)
for lang,code in [('pl','pl'),('en','texts'),('de','de'),('fr','fr'),('ru','ru'),('es','es'),('ko','kr'),('it','it')]:
 local=json.load(open(base/f'bc-localization-{code}.json'));aliases={tid:clean(get(local[tid])) for tid in wanted if tid and tid in local};translations={}
 for tid,s in aliases.items():
  if tid in eng:
   e=clean(get(eng[tid]));translations[e]=s;translations[e.lower()]=s
 gear={};tips={};bios={}
 for b in catalog['brawlers']:
  tid=mechanics.get(str(b['id']),{}).get('tid');tips[b['id']]=aliases.get(str(tid)+'_SHORT_DESC','');bios[b['id']]=aliases.get(str(tid)+'_DESC','')
  for g in b['gadgets']+b['starPowers']:
   gt=cards.get(g['id'],{}).get('TID');gear[g['id']]={'name':aliases.get(gt,''),'description':aliases.get(str(gt)+'_DESC','')}
 (root/'locales'/f'{lang}.json').write_text(json.dumps({'at':int(time.time()*1000),'translations':translations,'aliases':aliases,'gear':gear,'tips':tips,'bios':bios,'mapNames':{str(m['id']):aliases.get(locs.get(m['id'],{}).get('TID'),'') for m in catalog['maps']}},ensure_ascii=False,separators=(',',':')))
 print(lang,len(aliases),'strings')
codes=collections.defaultdict(list)
for tile in raw['tiles'].values():
 code=tile.get('TileCode')
 if isinstance(code,str) and len(code)==1:codes[code].append(tile)
lookup={}
for k,values in codes.items():
 attrs={(bool(v['BlocksMovement']),bool(v['BlocksProjectiles']),bool(v['IsForest'])) for v in values}
 if len(attrs)==1:lookup[k]=next(iter(attrs))
geometry={}
for m in catalog['maps']:
 loc=locs.get(m['id'],{});grid=raw['maps'].get(loc.get('Map'),{}).get('Data');
 if not isinstance(grid,list) or not grid or not all(isinstance(r,str) for r in grid) or len(set(map(len,grid)))!=1:continue
 total=sum(map(len,grid));known=blocked=forest=wall=0
 for row in grid:
  for c in row:
   if c in lookup:
    known+=1;move,projectile,bush=lookup[c];blocked+=move;wall+=projectile;forest+=bush
 ratio=wall/total;coverage=known/total
 terrain='unknown' if coverage<.9 else 'open' if ratio<.12 else 'closed' if ratio>.24 else 'mixed'
 geometry[m['id']]={'terrain':terrain,'reviewed':False,'inferred':True,'known':round(coverage,3),'walls':round(ratio,3),'obstacles':round(blocked/total,3),'bushes':round(forest/total,3),'width':len(grid[0]),'height':len(grid),'source':'BrawlAPI game/csv_logic/maps + tiles + locations','fetchedAt':catalog['fetchedAt']}
(root/'geometry.json').write_text(json.dumps(geometry,separators=(',',':')));print('geometry',len(geometry),'classified',sum(g['terrain']!='unknown' for g in geometry.values()))
