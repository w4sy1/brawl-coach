"""Refresh public game snapshots without touching secrets, user data or curated records."""
from pathlib import Path
import tempfile,subprocess,json,os,runpy,concurrent.futures,datetime
root=Path(__file__).resolve().parents[1];out=root/'public/coach';cache=Path(tempfile.mkdtemp(prefix='brawl-source-'))
paths=['v1/brawlers','v1/maps','game/csv_logic/characters','game/csv_logic/skills','game/csv_logic/locations','game/csv_logic/maps','game/csv_logic/tiles','game/csv_logic/cards']+['game/localization/'+x for x in ['texts','pl','de','fr','ru','es','kr','it']]
def download(path):
 p=cache/(path.replace('/','-')+'.json');subprocess.run(['curl','-fLsS','--max-time','45','https://api.brawlapi.com/'+path,'-o',str(p)],check=True);return path,json.loads(p.read_text())
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:data=dict(pool.map(download,paths))
b=data['v1/brawlers']['list'];m=data['v1/maps']['list'];assert len(b)>=50 and len(m)>=100
assert len({x['id'] for x in b})==len(b) and len({x['id'] for x in m})==len(m)
now=datetime.datetime.now(datetime.timezone.utc).date().isoformat();catalog={'source':'https://api.brawlapi.com','fetchedAt':now,'brawlers':b,'maps':m};(out/'catalog.js').write_text('window.CATALOG='+json.dumps(catalog,ensure_ascii=False,separators=(',',':'))+';')
chars={x['id']:x for x in data['game/csv_logic/characters'].values()};skills=data['game/csv_logic/skills'];profiles={};en=data['game/localization/texts']
for x in b:
 c=chars.get(x['id']);
 if not c:continue
 w=skills.get(c.get('WeaponSkill'),{});u=skills.get(c.get('UltimateSkill'),{});tip=en.get(str(c.get('TID'))+'_SHORT_DESC',{}).get('EN','').lower()
 counters=[cls for phrase,cls in [('tank','Tank'),('assassin','Assassin'),('marksmen','Marksman'),('thrower','Artillery')] if 'counter' in tip and phrase in tip]
 profiles[x['id']]={'tid':c.get('TID'),'internal':c.get('Name'),'speed':c.get('Speed'),'hp':c.get('Hitpoints'),'range':w.get('CastingRange'),'reload':w.get('RechargeTime'),'damage':w.get('Damage'),'bullets':w.get('NumBulletsInOneAttack'),'charge':u.get('ChargeSpeed'),'water':c.get('CanWalkOverWater'),'counterClasses':counters,'source':'BrawlAPI game/csv_logic/characters + skills','fetchedAt':now}
(out/'mechanics.json').write_text(json.dumps(profiles,separators=(',',':')))
# The packer reads a designated temporary cache and emits only needed localized strings and geometry summaries.
for path,value in data.items():
 if path.startswith('game/'):(cache/('bc-'+path.removeprefix('game/').replace('/','-')+'.json')).write_text(json.dumps(value))
(cache/'bc-maps.json').write_text(json.dumps(data['game/csv_logic/maps']))
os.environ['BC_GAME_CACHE']=str(cache);runpy.run_path(str(root/'scripts/prepare-game-data.py'),run_name='__main__');print('Refreshed',now,len(b),'profiles',len(m),'maps')
