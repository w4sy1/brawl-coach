# Raport pokrycia efektów — 29.10.2026

## Wynik

| Zakres | Wynik testu wykonania |
|---|---:|
| Modele bazowe postaci | **109/109 PASS** |
| Pozycje wyposażenia i trybów z katalogu | **436/436 PASS** |
| Łączne modele źródłowe | **545/545 PASS** |
| Operacje typowanych efektów wykonane przez istniejący silnik | **793 PASS** |
| Unikalne pary w teście granic oceny i dowodów źródłowych | **5886 PASS** |

Licznik oznacza pokrycie jakościowych modeli efektów, nie pełną symulację liczbową gry ani sprawdzoną w meczach skuteczność porad. Każdy wpis ma jawną definicję, opis i URL źródła, obsługiwane operacje oraz test ścieżki `Engine.evaluate`. Nie ma automatycznego ogólnego modelu zastępczego dla nieznanego opisu.

436 pozycji to **217 gadżetów, 216 gwiezdnych mocy i 3 tryby Buzza Lightyeara**. Katalog źródłowy umieszcza te trzy tryby w `starPowers`; aplikacja oznacza je jako tryby walki i dopuszcza tylko jeden aktywny. Nie przypisano im jednoczesnego działania. Bazowy model tej historycznej postaci uzupełniono na podstawie oficjalnych informacji Supercell.

## Co zmieniono

- Regexowe wykrywanie kilku słów zastąpiono jawnym rejestrem wszystkich pozycji: `data/effect-models.tsv`.
- Dodano źródłowe wyjątki i blokadę tożsamości opisów: `data/effect-overrides.json`, `data/effect-source-lock.json`.
- Kompilator w `scripts/prepare-abilities.mjs` sprawdza ID, nazwę, liczbę i kolejność przedmiotów, źródła oraz obsługę każdej operacji. Zmieniony opis wymaga ponownego przeglądu; generator nie zatwierdza go sam.
- `public/coach/effects.js` obsługuje warunki, koszty, cele efektów, ruch, amunicję, zasoby, jednostki przywołane, zmiany form, losowość i rozłączne tryby. Działa wewnątrz istniejącego `Engine.evaluate`, `candidates` i `complete` w `engine.js`.
- Numeryczne osie jakościowe wpływają na ocenę przydatności. Efekty bez uzasadnionej premii liczbowej mają konkretną poradę taktyczną: np. odwrócenie kolejności jaj nie daje darmowego bonusu obrażeń, a informacja o następnym Superze jest informacją, nie zwiększeniem obrażeń.
- Warunki mają stany `ready`, `conditional` i `blocked`. Nieznany warunek nie jest raportowany jako potwierdzone trafienie. Jawnie niespełniony warunek lub nieużyty gadżet nie wnosi efektu do oceny.
- Interfejs pokazuje kategorie modeli, opis źródłowy w wybranym języku, warunki i ograniczenia. Nowe teksty przetłumaczono na wszystkie osiem obsługiwanych języków. Moduł modeli jest dostępny offline.

## Dowody i testy

`docs/EFFECT-COVERAGE.json` zawiera osobny wynik dla każdego z **545 ID**, listę wykonanych operacji, konsumenta oceny lub porady taktycznej, sprawdzenie warunków i status. Raport generuje `node tests/effect-coverage.cjs --write`.

Test pokrycia sprawdza modele przez istniejący silnik, a nie samą obecność rekordów. Dodatkowe niezależne regresje obejmują:

- samoleczenie zamiast leczenia sojusznika;
- nietykalność celu podczas stazy oraz uśpienie przerywane obrażeniami;
- koszt zdrowia i amunicji, brak możliwości ataku, usunięcie ogłuszenia przez Reserve Buoy;
- odwrócenie kolejności pocisków bez dodawania obrażeń, odbicie bez zwiększenia zasięgu;
- losowy wynik bez sumowania wszystkich możliwych premii;
- trzy różne, rozłączne tryby Buzza;
- posiadane, lecz niewybrane wyposażenie bez aktywnego efektu;
- odrzucenie nieobsługiwanej operacji lub zmienionego źródła.

PASS: testy frontendu, silnika, pokrycia efektów, języków/offline, backendu oraz audyt tłumaczeń. **Kontrola TypeScript i pełny build Sites: PASS**. Build zakończył wszystkie pięć etapów; pozostało wcześniejsze ostrzeżenie narzędzia o niepełnej statycznej klasyfikacji tras. `git diff --check`: PASS.

`scripts/check-effect-source.mjs` wykonał 29.10.2026 odczyt aktualnego katalogu i angielskich porad z BrawlAPI. Wynik **MATCH**: 109 postaci, 436 pozycji, brak różnic względem użytych opisów. Dowód: `docs/EFFECT-SOURCE-CHECK.json`. To potwierdzenie zgodności tekstów, nie potwierdzenie wersji balansu ani poprawności interpretacji na podstawie meczów. Migawka źródłowa nadal ma datę 23.10.2026.

W przeglądarce IAB sprawdzono polski profil Buzza, widoczny komplet modeli 109/436, etykietę „Tryb walki”, wybór trybu szabli spośród dwóch dostępnych oraz uwzględnienie tylko wybranego trybu. Zrzut: `outputs/full-models-buzz.png`.

## Pliki

Główna implementacja: `data/effect-models.tsv`, `data/effect-overrides.json`, `data/effect-source-lock.json`, `scripts/effect-data.mjs`, `scripts/prepare-abilities.mjs`, `public/coach/effects.js`, `public/coach/abilities.js`, `public/coach/engine.js`.

Integracja i interfejs: `public/coach/app.js`, `public/coach/i18n.js`, `public/coach/index.html`, `public/coach/sw.js`, `scripts/update-catalog.py`.

Weryfikacja: `tests/effect-coverage.cjs`, `tests/abilities.cjs`, `tests/frontend.cjs`, `tests/locales-offline.cjs`, `scripts/check-effect-source.mjs`, raporty JSON i `PROJECT-STATUS.md`. Zachowano wcześniejsze zmiany backendu i testów aktywnego wyposażenia.

## Granice wyniku i zakres

Brak pełnego symulatora obrażeń, poziomów, trajektorii, odnowień i hiperdoładowania. Nie zgadywano wartości `x` z opisów. Wagi oceny są heurystyczne; nie ma zweryfikowanych statystyk meczowych. Nie wykonano testu na fizycznym telefonie ani produkcyjnej synchronizacji. Źródło nie podaje potwierdzonej wersji balansu.

Zakres odpowiada dokończeniu pokrycia efektów. Nie zmieniono architektury, konfiguracji produkcyjnej, integracji logowania, reklam ani Androida. Zmiany pozostają lokalne, bez commita, pusha i wdrożenia.
