# Umiejętności i języki — 28.10.2026

## Zachowanie silnika

Rozszerzono istniejący `Engine.evaluate`, `candidates` i `complete`. Ocena nadal jest heurystyką, nie prawdopodobieństwem wygranej. Uwzględnia indywidualne parametry z `mechanics.json` oraz jakościowe wnioski z konkretnych opisów, a nie samą nazwę klasy.

`scripts/prepare-abilities.mjs` odtwarza `public/coach/abilities.js` z katalogu i angielskiego pakietu gry. Każdy rozpoznany efekt zachowuje opis i URL źródła. Dane pochodzą ze snapshotu **23.10.2026**. Źródło nie potwierdza wersji balansu; `balanceVersion` pozostaje `null`.

Zakres: 109 profili, rozpoznane efekty w 42 opisach bazowych i 92 opisach wyposażenia spośród 436. Pozostałe teksty nie otrzymują wymyślonych efektów. Samo rozpoznanie słowa nie jest pełnym modelem umiejętności: reguły oceniają wyłącznie wymienione poniżej interakcje w odpowiednim kontekście. Nie symulują trajektorii, trafień, odnowień, trybów alternatywnych, hiperdoładowań ani wszystkich nowych mechanik gry.

Interakcje: leczenie i osłony pierwszej linii, kontrola ruchu ułatwiająca trafienia, przyspieszenie wejścia lub zmiany pozycji, otwieranie linii strzału, utrata osłon partnera, ściany blokujące wejście lub chroniące ataki zza osłony, ograniczenie leczenia przeciwnika, narzędzia przeciw dużej puli zdrowia, odporność na kontrolę i odrzucenie krótkodystansowego przeciwnika.

Każda para ma odrębne wyjaśnienia i źródła. Trzecia postać jest oceniana przez interakcje z obiema pozostałymi oraz zmianę oceny całego składu. Łączna korekta umiejętności jest ograniczona do ±10 punktów; wynik nadal mieści się w granicach 0–95/100.

## Wyposażenie

Posiadanie nie jest równoznaczne z użyciem. Dodano osobny wybór jednego `activeGadget` i jednego `activeStar`, wyłącznie spośród posiadanych przedmiotów danej postaci. Stare zapisy nie otrzymują automatycznie aktywnych przedmiotów. Wybrane pola przechodzą przez import, eksport i istniejący zapis chmury. Backend odrzuca aktywny przedmiot nieobecny w zapisanej kolekcji.

Odebranie przedmiotu czyści wybór i rekomendacje. Przedmioty nieznanej postaci lub obcego profilu są odrzucane w przeglądarce. Zmiana źródłowego opisu wyposażenia wyłącza efekty danego profilu do ponownego wygenerowania danych; zapobiega to korzystaniu ze starej interpretacji po aktualizacji katalogu.

## Języki i offline

- PL, EN, DE, FR, RU, ES, KO, IT: 166 kluczy interfejsu w każdym języku; zgodne parametry komunikatów.
- W każdym pakiecie: nazwy 109 postaci, 109 biografii, nazwy i opisy 436 przedmiotów, nazwy 1300 map. Zachowano nazwy z plików gry, bez samodzielnego tłumaczenia nazw własnych.
- Jedna krótka porada nie występuje w żadnym pakiecie źródłowym: Buzz Lightyear (16000088). Aplikacja jawnie komunikuje brak danych zamiast wymyślać poradę.
- Nazwy map identyczne z angielskimi nie są automatycznie uznawane za błąd: mogą być oficjalną nazwą własną. Raport strukturalny: `docs/LOCALE-AUDIT.json`. Nie wykonano korekty językowej przez rodzimych użytkowników wszystkich ośmiu języków.
- Usunięto wyścig odpowiedzi podczas szybkiej zmiany języka oraz pozostałości opisów poprzedniego języka. Błędny pakiet jest odrzucany; użytkownik widzi komunikat i może ponowić pobranie.
- Service worker instaluje wszystkie osiem pakietów razem z aplikacją i danymi silnika. Przełączenie języka nie wymaga uprzedniego odwiedzenia go online. Pierwsze uruchomienie i instalacja pamięci podręcznej wymagają sieci.
- Cache obejmuje tylko jawne publiczne pliki aplikacji i portrety. API kont i synchronizacji nie trafiają do cache. Przy kolejnym wydaniu ze zmianą plików aplikacji należy zmienić wersję cache w `sw.js`.

## Weryfikacja

PASS: `node tests/frontend.cjs`, `node tests/abilities.cjs`, `node tests/locales-offline.cjs`, `node tests/backend.cjs`, `node scripts/audit-locales.cjs`, TypeScript i pełny build Sites.

Testy silnika obejmują wszystkie **5886 unikalnych par** oraz przykłady rzeczywistego wpływu wybranego wyposażenia, konflikty ścian, ograniczenie leczenia, niezależność oceny od kolejności postaci i odrzucenie zmienionego źródła.

W przeglądarce IAB potwierdzono parę Barley + Frank: bez wybranego gadżetu **89/100**, po wybraniu Ziołowego toniku **91/100**; korekta umiejętności +2 → +4. Pokazano aktywny zestaw, polskie uzasadnienie i opis źródłowy. Następnie zatrzymano lokalny serwer HTTP i przełączono wszystkie osiem języków: nazwy postaci i aktywnego gadżetu były dostępne z cache, m.in. koreańskie 발리 i 약초 칵테일. To test niedostępnego serwera aplikacji, nie odłączenie całego komputera od Internetu. Pełny brak sieci dla plików aplikacji pokrywa test service workera z adapterem cache i odrzuconym `fetch`.

Zrzut: `outputs/abilities-pl-offline.png` (plik lokalny, ignorowany przez Git).

Nie wykonano testu na fizycznym telefonie, rzeczywistej synchronizacji chmury ani walidacji przewidywań na danych meczowych. Test backendu korzysta z adaptera D1 w pamięci. Nie publikowano zmian, nie wykonywano commita ani pusha.

## Pliki i zgodność z zakresem

- `public/coach/engine.js`: rozszerzenie istniejącej oceny i rekomendacji.
- `public/coach/abilities.js`, `scripts/prepare-abilities.mjs`: generowane efekty i odtwarzalny generator z dowodami źródłowymi.
- `public/coach/app.js`, `public/coach/index.html`: zestaw bojowy, wyjaśnienia par i trzeciej postaci, odporny na wyścigi wybór języka, jawne błędy i ponawianie.
- `public/coach/i18n.js`: osiem tłumaczeń nowych komunikatów.
- `public/coach/sw.js`: komplet pakietów językowych i danych silnika offline.
- `app/api/coach/[...path]/route.ts`: walidacja aktywnego zestawu w istniejącym zapisie.
- `scripts/update-catalog.py`: regeneracja efektów i audyt po aktualizacji źródła.
- `scripts/audit-locales.cjs`, `docs/LOCALE-AUDIT.json`: odtwarzalny audyt kompletności.
- `tests/frontend.cjs`, `tests/backend.cjs`, `tests/abilities.cjs`, `tests/locales-offline.cjs`: regresje i scenariusze nowego zachowania.
- `PROJECT-STATUS.md`, ten dokument: aktualny status, dowody i ograniczenia.

Zakres odpowiada punktom 1 i 2: bez zmiany architektury, integracji reklamowych, dostawców logowania, wydania Android lub wdrożenia. Kopia sprzed prac: `C:\Users\01dwa\Documents\Brawl-Coach-backups\before-abilities-locales-20261028.zip`.
