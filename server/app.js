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
        "title": "WEB",
        "subtitle": "DEV",
        "subtitle_2": "ELOPER",
        "based": "mieszkający w gdańsku",
        "button": "poznaj mnie"
      },
      "about": {
        "title": "O MNIE",
        "button": "PRZEWIŃ W DÓŁ",
        "one": "Cześć! Nazywam się Adrian Litewski.",
        "two" : "Zawsze myślałem o wszystkim pod kątem tego, jak to działa. Co sprawia, że coś dzieje się w ten, a nie inny sposób? Chciałbym częściej zadawać to pytanie, szukać odpowiedzi i rozwijać krytyczne myślenie. Pracując z grupą osób równie pasjonujących się tematem, budować profesjonalne projekty. Zaspokajając potrzebę tworzenia, brać odpowiedzialność za powierzone zadania i osiągać cele. Stając się specjalistą w danej dziedzinie, udowodnić sobie i innym, ile jestem wart."
      },
      "skills": {
        "title": "JAK",
      },
      "how": {
        "info": "Zawsze dbam o przejrzystość kodu, świetny design, responsywność oraz doświadczenie użytkownika.",
        "info2": "Zajrzyj do moich repozytoriów na Githubie."
      },
      "motto": {
        "title": "MOTTO",
        "quote": "Lepiej jest zrobić cokolwiek niż nic nie robić i czekać na zrobienie wszystkiego"
      },
      "contact": {
        "title": "KONTAKT",
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
        "home": "START",
        "about": "O MNIE",
        "skills": "JAK",
        "projects": "PORTFOLIO",
        "contact": "KONTAKT"
      },
      "contactTop" : {
        "title": "KONTAKT",
      },
      "projects": {
        "title": "PORTFOLIO",
        "button": "WIĘCEJ",
        "number": "Nr",
      },
      "descriptions" : [
        {
          "id": 1,
          "desc": "Broń miasta i niszcz kosmitów! Strzelaj do obcych statków i zbieraj kapsuły, aby zwabić statek-matkę. Wygraj w jak najkrótszym czasie i dodaj swój wynik do tabeli liderów."
        },
        {
          "id": 2,
          "desc": "Oglądaj więcej! Serwis streamingowy z logowaniem, rejestracją, listą odtwarzania, filmami, programami telewizyjnymi, kolekcjami, hubami i wyszukiwarką."
        },
        {
          "id": 3,
          "desc": "Znajdź najlepszą ścieżkę! Narysuj dostępne trasy na siatce, a Pathfinder znajdzie dla Ciebie najkrótszą drogę."
        },
        {
          "id": 4,
          "desc": "Sklep dla audiofilów. Podstrony kategorii i produktów. Koszyk z wprowadzaniem ilości sztuk. Podsumowanie zamówienia, lista zamówionych produktów i moduł potwierdzający."
        },
        {
          "id": 5,
          "desc": "Spróbuj dopasować pary! Gra solo lub dla wielu graczy (do 4 graczy). Ustaw motyw, aby używać liczb lub ikon w kafelkach. Wybierz grę na siatce 6x6 lub 4x4."
        },
        {
          "id": 6,
          "desc": "Projekt z Bootcampa. Miau Ma Mia! Witryna restauracji z podstronami. Dodaj produkty do koszyka lub zarezerwuj stolik!"
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
        "title": "WEB",
        "subtitle": "DEV",
        "subtitle_2": "ELOPER",
        "based": "based in gdańsk / poland",
        "button": "get to know me"
      },
      "about": {
        "title": "ABOUT ME",
        "button": "SCROLL DOWN",
        "one": "Hi! My name is Adrian Litewski.",
        "two" : "I have always thought about everything in terms of how it works. What makes something happen this way and not otherwise? I would like to ask this question more often, look for answers and develop critical thinking. By working with a group of people who are equally passionate about the topic, build professional projects. By satisfying the need to create, take responsibility for assigned tasks and achieve goals. By becoming a specialist in a given field, prove to myself and others how much I am worth."
      },
      "skills": {
        "title": "HOW",
      },
      "how": {
        "info": "I always care about clear code, cool design, responsiveness and user experience.",
        "info2": "Check out my repositories on Github."
      },
      "motto": {
        "title": "MOTTO",
        "quote": "It is better to do something than to do nothing while waiting to do everything"
      },
      "contact": {
        "title": "CONTACT",
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
        "about": "ABOUT",
        "skills": "HOW",
        "projects": "PORTFOLIO",
        "contact": "CONTACT"
      },
      "contactTop" : {
        "title": "CONTACT",
      },
      "projects": {
        "title": "PORTFOLIO",
        "button": "LEARN MORE",
        "number": "No",
      },
      "descriptions" : [
        {
          "id": 1,
          "desc": "Defend town and destroy aliens! Shoot alien ships and collect capsules to lure The Mothership. Win in the shortest possible time and add your score to leaderboard."
        },
        {
          "id": 2,
          "desc": "Watch more! Streaming service with login, registration, playlist, movies, TV shows, collections, hubs and search."
        },
        {
          "id": 3,
          "desc": "Find the best path! Draw available routes on a grid and Pathfinder will find the shortest route for you."
        },
        {
          "id": 4,
          "desc": "Multi-page E-commerce website for audiophiles. Category and product pages. Cart with quantity input. Checkout page, ordered products dropdown and confirming order modal with order ID."
        },
        {
          "id": 5,
          "desc": "Try to match pairs! Solo or multiplayer (up to 4 Players) game. Set the theme to use numbers or icons within the tiles. Choose to play on either a 6x6 or 4x4 grid."
        },
        {
          "id": 6,
          "desc": "Bootcamp project. Miau Ma Mia! Multi-page restaurant website. Add products to cart or book a table!"
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
