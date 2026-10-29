# Przekazanie do prac nad Androidem

## Co znajduje się w repozytorium

Działająca aplikacja web/PWA z silnikiem JavaScript i backendem TypeScript. Katalog `public/coach/` zawiera pliki interfejsu, modele efektów, dane i osiem pakietów językowych.

**Repozytorium nie zawiera obecnie projektu Android/Gradle, AndroidManifest.xml ani modułu aplikacji. Nie da się jeszcze otworzyć go jako gotowego projektu Android Studio i wybrać Build APK.**

## Co trzeba wykonać przed budową APK

1. Dodać projekt Android: aplikację wykorzystującą istniejący interfejs webowy albo osobną implementację natywną. Wybór tego zakresu nie został jeszcze wykonany.
2. Podłączyć istniejące dane i silnik; zachować kolekcję, osiem języków, wybór aktywnego wyposażenia i wszystkie funkcje.
3. Określić sposób zapisu na urządzeniu oraz adres i konfigurację backendu dla funkcji sieciowych. Backend webowy nie jest częścią samego APK.
4. Sprawdzić uprawnienia, nawigację wstecz, obrót ekranu, zapis kolekcji, działanie offline i aktualizacje danych.
5. Uruchomić build Gradle, testy i lint. Dopiero wtedy przygotować debug APK, a następnie własną konfigurację podpisywania release.

Nie dodano pustego modułu Android ani nie oznaczono APK jako gotowego. Wyniki testów webowych i modeli są w `docs/FULL-EFFECT-COVERAGE.md` oraz `docs/EFFECT-COVERAGE.json`.
