# Zadanie 3 - Zmiana wyglądu dolnej krawędzi menu przy scrollu


## Cel zadania

Nasze menu ma teraz niewidoczną dolną krawędź. Kiedy zjeżdzamy niżej na stronę, widzimy, że menu zlewa się z tłem (na wysokości sekcji z przyciskami `więcej`). Naszym celem jest zmiana koloru dolnej krawędzi menu (np. na jasnoszary), gdy użytkownik zaczyna scrollować stronę. Dzięki temu unikniemy efektu zlewania się menu z innymi elementami.

# Instrukcja

1. Przypisz do zmiennej element, któremu chcesz dodać dolną krawędź. Jeśli nie masz pewności, który to element, spróbuj zmodyfikować własność `border` w pliku CSS dla tych elementów, które wydają Ci się prawdopodobne. Gdy dodasz własność `border-bottom` razem z wartością np. `1px solid red`, powinna pokazać się dolna krawędź danego elementu. Po przypisaniu zmiennej wyświetl ją w konsoli, aby sprawdzić, czy wszystko zadziałało prawidłowo. Jeśli nie pamiętasz, jak przypisać zmienną, sprawdź w punkcie pierwszym Zadania 1.
2. W JS możemy dodawać różne `listenery` do elementów strony. Nas teraz będzie interesował `event` o nazwie `scroll`. Chcemy przypisać go do całego okna, ponieważ będziemy dodawać style do krawędzi przy scrollowaniu całej strony. Dodaj więcej `eventListenerów` o nazwie `scroll` do okna, czyli `window`. Zrób `console.log` wewnątrz funkcji i sprawdź, czy pojawia się w konsoli, gdy scrollujesz stronę.
```javascript
    window.addEventListener('scroll', function() {
      console.log('działa przy scrollu');
    });
```
3. Zamień teraz `console.log` na odpowiednią akcję - podczas scrollowania ma zmienić się kolor dolnej krawędzi menu. Chodzi więc o własność `style.borderBottom`. Przypisz do niej odpowiednią wartość. Pamiętaj, że działa to dokładnie tak samo jak w pliku CSS. Podaj wiec grubość linii, jej typ oraz kolor. Jeśli nie masz pomysłu, jaki kolor ma mieć dolna krawędź, możesz ustawić go na `#7f7f7f`. Zakładając, że menu jest przypisane do zmiennej o nazwie `menu`, tak np. może wyglądać przypisanie wartości:
```javascript
    menu.style.borderBottom = '1px solid #7f7f7f';
```
Pamiętaj: w CSS zapisujemy własności z myślnikiem np. `border-bottom`, w JS musimy robić to używając camelCase, czyli `borderBottom`. 
Gotowe!