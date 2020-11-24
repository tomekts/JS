# Zadanie 4 - Przycisk -Wróć na górę-

## Cel zadania

Naszym celem jest dodanie do kodu HTML przycisku `wróć na górę`, a następnie przypisanie do niego funkcji, która sprawi, że po kliknięciu użytkownik zostanie przeniesiony na górę strony bez konieczności scrollowania całej zawartości ręcznie.

# Instrukcja

1. W kodzie HTML dodaj element `button` z treścią `wróć na górę`. Powinien być widoczny gdzieś na dole strony (np. w stopce). Nadaj mu odpowiednią klasę - sprawdź, jakie klasy mają inne przyciski. Takie klasy jak np. `btn` są klasami Bootstrapa, więc zawierają już jakieś style. Sprawdź różne klasy. Możesz oczywiście ostylować przycisk w pliku CSS. 
2. W pliku JS przypisz przycisk do zmiennej i wyświetl zmienną w konsoli, żeby sprawdzić, czy wszystko przebiegło prawidłowo.
3. Okno, czyli `window` w JS ma wiele właściwości, które możemy wykorzystać. Jedną z nich jest `scroll`. Pozwala ona na przeniesienie do konkretnego miejsca na stronie przez wskazanie jego koordynatów według zasady `window.scroll( x, y)`. `x` jest pikselem wdłuż poziomej osi dokumentu, licząc od lewego górnego rogu. `y` jest pikselem wdłuż pionowej osi, również licząc od lewego górnego rogu.
4. My chcemy się przenieść na samą górę, a więc do miejsca `(0,0)`. Do przycisku dodaj `eventListener` nasłuchujący na `click`, dodaj `console.log` i sprawdź, czy wywołuje się on na kliknięcie. 
5. Następnie wskaż wewnątrz funkcji, gdzie ma zostać przeniesiony użytkownik po kliknięciu wpisując odpowiednie wartości dla `window.scroll`. Gotowe!