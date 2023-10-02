const express = require("express");
const path = require('path');
const app = express();

// PARSING
app.use(express.json());

//  STATIC
app.use(express.static(path.join(__dirname, 'build')));

//  API
app.get("/api", (req, res) => {
  console.log(req);
  res.send("Server works!");
});

//  LANGUAGE
app.get("/api/language/pl", (req, res) => {
  res.json(
    {
      "home": {
        "title": "JESTEM",
        "subtitle": "TWORZE",
        "subtitle_2": "STRONY",
        "based": "mieszkający w gdańsku",
        "button": "poznaj mnie"
      },
      "about": {
        "title": "KTO?",
        "button": "PRZEWIŃ W DÓŁ",
        "one": "Cześć! Nazywam się Adrian Litewski.",
        "two" : "Moja przygoda z pisaniem kodu rozpoczęła się w zeszłym roku. Z czasem przerodziła się w prawdziwą pasję. Dziś jestem entuzjastycznym programistą, skupiającym się na dostarczaniu przykuwających oko i łatwych w użyciu rozwiązań. Piszę czysty, dobrze ustrukturyzowany, wolny od błędów kod i dążę do tego żeby móc poświęcać temu jak najwięcej czasu.",
        "three": " Przewiń w dół żeby zobaczyć moje projekty i technologie, których używam."
      },
      "skills": {
        "title": "JAK ?",
      },
      "how": {
        "info": "Zawsze dbam o przejrzystość kodu, świetny design, responsywność oraz doświadczenie użytkownika.",
        "info2": "Zajrzyj do moich repozytoriów na Githubie."
      },
      "motto": {
        "title": "MOTTO?",
        "quote": "Lepiej jest zrobić cokolwiek niż nic nie robić i czekać na zrobienie wszystkiego"
      },
      "contact": {
        "title": "GDZIE?",
        "info": "Mieszkam w Gdańsku. Aktualnie szukam swojej pierwszej pracy w branży IT.",
        "info2": "Skontaktuj się ze mną:",
        "button": "WYŚLIJ",
        "placeholders": {
          "name": "IMIĘ",
          "email": "EMAIL",
          "msg": "WIADOMOŚĆ"
        }
      },
      "navbar": {
        "home": "GŁÓWNA",
        "about": "KTO",
        "skills": "JAK",
        "projects": "PROJEKTY",
        "contact": "GDZIE"
      },
      "contactTop" : {
        "title": "GDZIE",
      },
      "projects": {
        "title": "PROJEKTY?",
        "button": "WIĘCEJ",
        "number": "Nr",
      },
      "descriptions" : [
        {
          "id": 1,
          "desc": "Oglądaj więcej! Serwis streamingowy z logowaniem, rejestracją, listą odtwarzania, filmami, programami telewizyjnymi, kolekcjami, hubami i wyszukiwarką."
        },
        {
          "id": 2,
          "desc": "Znajdź najlepszą ścieżkę! Narysuj dostępne trasy na siatce, a Pathfinder znajdzie dla Ciebie najkrótszą drogę."
        },
        {
          "id": 3,
          "desc": "Sklep dla audiofilów. Podstrony kategorii i produktów. Koszyk z wprowadzaniem ilości sztuk. Podsumowanie zamówienia, lista zamówionych produktów i moduł potwierdzający."
        },
        {
          "id": 4,
          "desc": "Spróbuj dopasować pary! Gra solo lub dla wielu graczy (do 4 graczy). Ustaw motyw, aby używać liczb lub ikon w kafelkach. Wybierz grę na siatce 6x6 lub 4x4."
        },
        {
          "id": 5,
          "desc": "Projekt z Bootcampa. Miau Ma Mia! Witryna restauracji z podstronami. Dodaj produkty do koszyka lub zarezerwuj stolik!"
        },
        {
          "id": 6,
          "desc": "Strona informacyjna eleganckiej restauracji. Dokonaj rezerwacji w Dine!"
        },
        {
          "id": 7,
          "desc": "Broń miasta i niszcz kosmitów! Strzelaj do obcych statków i zbieraj kapsuły, aby zwabić statek-matkę. Wygraj w jak najkrótszym czasie i dodaj swój wynik do tabeli liderów."
        }
      ],
      "modal": "ZOBACZ"
    }
  );
});

app.get("/api/language/eng", (req, res) => {
  res.json(
    {
      "home": {
        "title": "I'M",
        "subtitle": "I CREATE",
        "subtitle_2": "WEBSITES",
        "based": "based in gdańsk / poland",
        "button": "get to know me"
      },
      "about": {
        "title": "WHO?",
        "button": "SCROLL DOWN",
        "one": "Hi! My name is Adrian Litewski.",
        "two" : "My adventure with coding began about a year ago. Over time, it turned into a real passion. Today I am an enthusiastic front-end developer, focused on delivering eye-catching and easy to use solutions. I am writing clean, well-structured, error-free code and I strive to be able to devote as much time to it as possible.",
        "three": "Scroll down to see my projects and technologies I use."
      },
      "skills": {
        "title": "HOW?",
      },
      "how": {
        "info": "I always care about clear code, cool design, responsiveness and user experience.",
        "info2": "Check out my repositories on Github."
      },
      "motto": {
        "title": "MOTTO?",
        "quote": "It is better to do something than to do nothing while waiting to do everything"
      },
      "contact": {
        "title": "WHERE?",
        "info": "I live in Gdańsk / Poland. I am currently looking for my first IT job.",
        "info2": "Contact me:",
        "button": "SEND",
        "placeholders": {
          "name": "NAME",
          "email": "EMAIL",
          "msg": "MESSAGE"
        }
      },
      "navbar": {
        "home": "HOME",
        "about": "WHO",
        "skills": "HOW",
        "projects": "WHAT",
        "contact": "WHERE"
      },
      "contactTop" : {
        "title": "WHERE",
      },
      "projects": {
        "title": "PROJECTS?",
        "button": "LEARN MORE",
        "number": "No",
      },
      "descriptions" : [
        {
          "id": 1,
          "desc": "Watch more! Streaming service with login, registration, playlist, movies, TV shows, collections, hubs and search."
        },
        {
          "id": 2,
          "desc": "Find the best path! Draw available routes on a grid and Pathfinder will find the shortest route for you."
        },
        {
          "id": 3,
          "desc": "Multi-page E-commerce website for audiophiles. Category and product pages. Cart with quantity input. Checkout page, ordered products dropdown and confirming order modal with order ID."
        },
        {
          "id": 4,
          "desc": "Try to match pairs! Solo or multiplayer (up to 4 Players) game. Set the theme to use numbers or icons within the tiles. Choose to play on either a 6x6 or 4x4 grid."
        },
        {
          "id": 5,
          "desc": "Bootcamp project. Miau Ma Mia! Multi-page restaurant website. Add products to cart or book a table!"
        },
        {
          "id": 6,
          "desc": "Information website of an elegant restaurant. Make reservation in Dine!"
        },
        {
          "id": 7,
          "desc": "Defend town and destroy aliens! Shoot alien ships and collect capsules to lure The Mothership. Win in the shortest possible time and add your score to leaderboard."
        }
      ],
      "modal": "TAKE A LOOK"
    }
  );
});

//  ROUTING
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }});
});

//  PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
