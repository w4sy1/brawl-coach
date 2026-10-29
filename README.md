# Brawl Coach

Nieoficjalny doradca Brawl Stars: katalog postaci i map, budowanie drużyny, draft, kolekcja, aktywne wyposażenie oraz wyjaśnienia synergii i kontr.

**To projekt web/PWA, a nie projekt Android/Gradle.** Otwarcie tego repozytorium w Android Studio nie umożliwia jeszcze zbudowania APK. Informacje o kolejnym etapie: [przygotowanie Androida](docs/ANDROID-HANDOFF.md).

## Stan funkcji

- 8 języków: polski, angielski, niemiecki, francuski, rosyjski, hiszpański, koreański i włoski.
- 109 profili postaci i 1300 map z lokalizowanymi nazwami.
- Dobieranie drugiej/trzeciej postaci, zamiany, draft z banami i przeciwnikami.
- Oddzielne posiadane i aktywne wyposażenie, poziomy postaci, zapis lokalny i kopie danych.
- **109/109 bazowych modeli oraz 436/436 pozycji katalogu**, 793 operacje efektów objęte testami. 436 pozycji obejmuje 217 gadżetów, 216 gwiezdnych mocy i 3 rozłączne tryby Buzza Lightyeara.
- PWA z pamięcią podręczną aplikacji i wszystkich pakietów językowych.

Oceny są heurystyczne i nie oznaczają szans wygranej. Pełny zakres modeli, źródła i ograniczenia opisuje [raport pokrycia](docs/FULL-EFFECT-COVERAGE.md). Dane gry pochodzą z BrawlAPI/Brawlify; migawka ma datę 23.10.2026, a porównanie opisów ze źródłem 29.10.2026 zakończyło się wynikiem MATCH.

## Uruchomienie lokalne

Wymagane: Node.js >=22.13.0 oraz pnpm 11.25.0. Polecenia wykonuj w katalogu repozytorium:

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Otwórz lokalny adres wypisany przez serwer, zwykle `http://localhost:5173/coach/index.html`.

Sam interfejs można również udostępnić statycznie, jeżeli masz Pythona:

```powershell
python -m http.server 5188 --bind 127.0.0.1 --directory public
```

Adres: `http://127.0.0.1:5188/coach/index.html`. W tym wariancie API konta i synchronizacja chmury nie są uruchomione; kolekcja lokalna i silnik działają w przeglądarce.

## Testy i build

```powershell
node scripts/prepare-abilities.mjs
node tests/effect-coverage.cjs
node tests/frontend.cjs
node tests/abilities.cjs
node tests/locales-offline.cjs
node tests/backend.cjs
node scripts/audit-locales.cjs
node node_modules/typescript/bin/tsc --noEmit
pnpm build
```

Testy backendu używają adaptera D1 w pamięci. Nie potwierdzają działania zewnętrznego logowania, synchronizacji na telefonach ani trafności porad na rzeczywistych meczach.

## Struktura

| Ścieżka | Zawartość |
|---|---|
| `public/coach/` | Interfejs, silnik, dane, lokalizacje i PWA |
| `data/effect-models.tsv` | Jawne modele efektów wszystkich pozycji |
| `data/effect-source-lock.json` | Kontrola zmian opisów źródłowych |
| `app/api/coach/` | Backend: zapisy, administracja i integracje |
| `db/`, `drizzle/` | Schemat i migracje danych |
| `scripts/` | Generowanie, audyt danych i narzędzia projektu |
| `tests/` | Testy logiki, języków, offline i backendu |
| `docs/` | Raporty, ograniczenia i opis integracji |

## Backend i integracje

Backend korzysta z Cloudflare Workers/D1 i tożsamości platformy Sites. Poza tym środowiskiem potrzebuje odpowiednio skonfigurowanej tożsamości i bazy; nie należy ufać nagłówkom użytkownika dostarczanym bezpośrednio przez klienta. Plik `.openai/hosting.json` opisuje istniejący projekt Sites; samo sklonowanie repozytorium nie nadaje dostępu do niego i nie wdraża aplikacji.

Google/e-mail, oficjalne API gracza, statystyki meczowe i reklamy wymagają osobnej konfiguracji. Sekrety przechowuj wyłącznie po stronie serwera. Nie dodawaj `.env`, tokenów ani kluczy podpisywania do repozytorium.

Więcej: [integracje](docs/INTEGRATIONS.md), [stan projektu](PROJECT-STATUS.md), [dokumentacja startera](docs/STARTER.md).

## Materiały gry

Projekt fanowski, niewspierany przez Supercell. Nazwy, postacie, grafiki i inne materiały gry należą do odpowiednich właścicieli. Repozytorium nie przyznaje dodatkowych praw do tych materiałów.
