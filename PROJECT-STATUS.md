# Brawl Coach — kontynuacja w Codex

## Publiczne repozytorium — 29.10.2026

Na wyraźną prośbę właściciela utworzono publiczne repozytorium: https://github.com/w4sy1/brawl-coach. Przygotowano commit źródeł wraz z modelami, testami i raportami. Docelowa gałąź GitHub: `main`; lokalna gałąź robocza: `codex/abilities-and-locales`.

Przed publikacją sprawdzono pliki oraz istniejącą historię Git pod kątem sekretów. Testy, TypeScript i `pnpm build`: PASS. README opisuje rzeczywisty projekt web/PWA i uruchomienie; dokument `docs/ANDROID-HANDOFF.md` wyjaśnia brak projektu Android/Gradle oraz dalsze prace potrzebne do APK. Nie budowano ani nie publikowano APK, release lub nowej wersji strony Sites. Wzmianki o braku zgody na commit/push w starszych sekcjach dotyczą wcześniejszych etapów.

## Pokrycie modeli — 29.10.2026

**109/109 modeli bazowych i 436/436 pozycji katalogu PASS**, 793 operacje wykonane przez istniejący silnik; pełny audyt 545 ID: `docs/EFFECT-COVERAGE.json`. Raport: [docs/FULL-EFFECT-COVERAGE.md](docs/FULL-EFFECT-COVERAGE.md).

Rejestr jest jawny i przypięty do źródeł. Efekty mają warunki, koszty i konsumenta w ocenie lub poradach taktycznych. Trzy pozycje katalogu to rozłączne tryby Buzza, a nie gwiezdne moce. Wynik oznacza pokrycie jakościowych modeli, nie pełną symulację liczbową ani skuteczność potwierdzoną w meczach.

Odczyt BrawlAPI 29.10.2026: **MATCH**, brak różnic opisów 109 postaci i 436 pozycji względem użytej migawki. Wszystkie zestawy testów przeszły. Zmiany lokalne, bez commita, pusha i wdrożenia. Poniższe sekcje są historią wcześniejszych etapów i ich ówczesnych ograniczeń.

## Aktualny etap — 28.10.2026

Zrealizowano lokalną rozbudowę silnika umiejętności/wyposażenia oraz audyt ośmiu języków i obsługę ich pakietów offline. Szczegóły, zakres pokrycia, ograniczenia i wyniki: [docs/ABILITIES-AND-LOCALES.md](docs/ABILITIES-AND-LOCALES.md). Branch: `codex/abilities-and-locales`.

Aktywny zestaw jest oddzielony od posiadanych przedmiotów. Wnioski o parach, kontrach i trzeciej postaci mają źródła; nierozpoznane i zmienione opisy nie dostają wymyślonego efektu. Nadal nie jest to kompletny symulator umiejętności wszystkich postaci ani empiryczna meta.

PASS: testy frontendu, silnika (5886 par), języków/offline, backendu, kontrola TypeScript i build. W przeglądarce potwierdzono zmianę wyniku po wyborze gadżetu i przełączanie wszystkich języków po zatrzymaniu serwera aplikacji. Poprzednie ograniczenia dotyczące integracji, telefonu i produkcyjnej synchronizacji pozostają aktualne. Zmiany są lokalne, bez commita, pusha i wdrożenia.

Poniżej zachowano historyczny stan z 26.10.2026.

Stan z 26.10.2026. Źródła pobrane z istniejącego projektu Sites, bez tworzenia drugiej aplikacji.

- Projekt: `appgprj_6adbb22260548191a8f1d46b144624b3`.
- Adres: https://brawl-coach-dominik.newgoose33.chatgpt.site
- Baza źródeł: `df2d1141d3d9d58b7e8d67150b93189bbd15c4de`, branch `main`.
- Dostęp potwierdzony przez Sites: wyłącznie właściciel. Włączony harmonogram odświeżania katalogu; sam harmonogram nie potwierdza udanego wykonania.

## Potwierdzone lokalnie

Test `node tests/frontend.cjs` przechodzi: słowniki ośmiu języków, dziewięć widoków w każdym języku, profile katalogu, dobieranie drużyn, filtry kolekcji i draftu, walidacja zapisów.

Poprawiono zmianę języka: nazwy map, opisy postaci, wyposażenia i porady są czyszczone razem z pozostałym pakietem językowym. W trakcie pobierania lub przy błędzie sieci aplikacja korzysta ze źródłowych tekstów zamiast mieszać poprzedni język z nowym. Dodano test regresji i odrzucanie nieobsługiwanego kodu języka.

## Ograniczenia istniejącej aplikacji

- Oceny i kontry są heurystyką parametrów i klas; nie oznaczają szans wygranej.
- Wyposażenie jest zapisywane, ale nie ma pełnego modelu interakcji umiejętności.
- Analiza map opisuje geometrię; nie symuluje linii strzału.
- Logowanie platformy i zapis D1 mają implementację; rzeczywista synchronizacja między urządzeniami wymaga sprawdzenia.
- Google/e-mail, import konta gracza, statystyki meczowe i reklamy wymagają zewnętrznej konfiguracji lub źródeł danych. Nie dodawać danych demonstracyjnych jako prawdziwej mety.
- Brak natywnego APK/AAB.

## Następne prace

1. Ukończyć lokalny build i test backendu, sprawdzić interfejs w przeglądarce i na telefonie.
2. Rozszerzyć istniejący silnik o udokumentowane właściwości umiejętności i wyposażenia, z podaniem źródła, wersji balansu i zakresu pokrycia.
3. Zweryfikować kompletność ośmiu języków i zachowanie offline.
4. Podłączyć dostępne integracje po dostarczeniu konfiguracji dostawców; sekrety przechowywać wyłącznie po stronie serwera.
5. Przygotować i przetestować wydanie Android po ustabilizowaniu aplikacji webowej.

Publikacja i testy na urządzeniu nie są potwierdzone przez sam test lokalny. Dalsze wyniki sprawdzeń należy dopisać poniżej.

## Wynik weryfikacji lokalnej 26.10.2026

- `pnpm install --frozen-lockfile`: PASS; lockfile zachowany. Pomocnik instalacji wywoływał WSL bez zainstalowanej dystrybucji; bezpośredni pnpm 11.25.0 zakończył instalację.
- `node tests/frontend.cjs`: PASS, w tym nowy test zmiany języka.
- `node tests/backend.cjs`: PASS; adapter D1 w pamięci, bez zewnętrznych dostawców.
- `node node_modules/typescript/bin/tsc --noEmit`: PASS.
- `node --check public/coach/app.js`: PASS.
- Pomocnik Sites `build-site.mjs`: PASS, wszystkie pięć etapów kompilacji. Ostrzeżenie narzędzia: niepełna statyczna klasyfikacja tras.
- `git diff --check`: PASS. Zakres: poprawka języka, test regresji i ten dokument; bez zmian architektury lub zależności.
- Nie wykonano testu wizualnego, testu telefonu ani rzeczywistej synchronizacji chmury. Zmiany nie zostały commitowane, wysłane ani wdrożone.
