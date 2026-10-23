# Brawl Coach 0.4

The published web application uses the Sites platform identity and D1. User records are scoped to authenticated Site user IDs; revisions prevent silent overwrite. Admin authorization is checked server-side against the secret `ADMIN_EMAIL`. Never put credentials in browser files.

## Shipped

- Eight UI dictionaries and packaged game localization for Polish, English, German, French, Russian, Spanish, Korean and Italian. A source-language fallback is explicit for missing/new text.
- All catalog profiles/maps; base character parameters from raw character/skill tables. Abilities are source descriptions, not automatically recommended builds.
- Geometry inferred from map grids and tile flags. Thresholds describe obstacle density, not line-of-sight simulation. Curated reviews can override it.
- Team completion, replacements, draft exclusions and pick history, player collection, levels, available gadgets/star powers, comparison and beginner guidance.
- Parameter/class scoring. Level influences own-roster recommendations; equipment is saved but not yet modeled as ability-level interactions. Unverified pair synergies are labeled.
- Real platform-identity cloud save, optimistic conflicts, local backup/import, and source cache.
- Admin editing and audit log; schema validation for manual statistics.
- Supercell headline fetch with cached fallback; a PWA manifest and service worker that never caches account APIs.

## Source refresh

The owner-private Site exposes POST `/api/coach/tasks/refresh`, enabled only by `PRIVATE_UPDATES=1`. It fetches fixed BrawlAPI URLs and writes only shared catalog/parameter cache records. It does not accept source URLs or modify user/curated data. A task must confirm the Site is still owner-private via `get_site` before calling it with Site service access. Disable this flag before changing the Site audience. GET `/api/coach/catalog` reads back the saved refresh.

The browser checks the shared cache and public source on opening, at most once per six hours. `scripts/update-catalog.py` rebuilds packaged localization and geometry from the raw source files; it must pass tests/build before publication. Routine scheduled cache updates do not republish or rebuild localization/geometry. Their source date remains explicit.

## Not connected

- Google/email authentication: no external provider has been configured; platform identity is the only active sign-in. Do not pretend that disabled provider buttons authenticate.
- Brawl Stars account import: requires a server-side `BRAWL_API_TOKEN` and official API access compatible with hosting egress restrictions. The current app fails closed when absent.
- Empirical meta: the public static BrawlAPI supplies no live win-rate data or event rotation. The app has no fabricated tier list. A licensed dataset or a dedicated official-API collection pipeline is needed. Admin imports must include map, patch, period, source and nonzero sample counts.
- Ads: placements exist outside drafting; no publisher account or ad SDK is connected.
- Native Android: this release is a responsive web/PWA application, not an APK/AAB.

## Validation

`node tests/frontend.cjs`, `node tests/backend.cjs`, `node node_modules/typescript/bin/tsc --noEmit`, then the Sites build helper. These test rendering and logic using DOM stubs, backend authorization/CAS with an in-memory D1 adapter, and compile the server. They do not substitute for visual browser or real Google/email sign-in tests.
