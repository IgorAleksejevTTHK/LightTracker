// Sõnavara massiiv sisaldab hajusrakenduste teemaga seotud sõnu
// ning nende tõlkeid eesti ja vene keeles.
const words = [
    { et: "arvuti", ru: "компьютер" },
    { et: "võrk", ru: "сеть" },
    { et: "server", ru: "сервер" },
    { et: "klient", ru: "клиент" },
    { et: "andmebaas", ru: "база данных" },
    { et: "rakendus", ru: "приложение" },
    { et: "kasutaja", ru: "пользователь" },
    { et: "andmed", ru: "данные" },
    { et: "ühendus", ru: "соединение" },
    { et: "sõlm", ru: "узел" },
    { et: "hajusrakendus", ru: "распределённое приложение" },
    { et: "protokoll", ru: "протокол" }
];

// Muutujad hoiavad hetkel kasutatavaid juhuslikke sõnu.
let currentEstonian;
let currentRussian;


// Funktsioon valib massiivist juhusliku sõna.
// Math.random() annab juhusliku arvu ja Math.floor() teeb sellest täisarvu.
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}


// Genereerib mõlema tabeli jaoks uued juhuslikud sõnad.
function generateWords() {

    // Valime esimese sõna Eesti → Vene kontrolli jaoks.
    currentEstonian = getRandomWord();

    // Valime teise sõna Vene → Eesti kontrolli jaoks.
    currentRussian = getRandomWord();

    // Kuvame eestikeelse sõna esimeses tabeli veerus.
    document.getElementById("estonianWord").textContent =
        currentEstonian.et;

    // Kuvame venekeelse sõna teises tabeli veerus.
    document.getElementById("russianWord").textContent =
        currentRussian.ru;

    // Puhastame vanad vastused ja tulemused.
    document.getElementById("russianAnswer").value = "";
    document.getElementById("estonianAnswer").value = "";

    document.getElementById("russianResult").textContent = "";
    document.getElementById("estonianResult").textContent = "";
}


// Kontrollib, kas kasutaja sisestatud vene keelne vastus on õige.
function checkRussian() {

    const answer = document.getElementById("russianAnswer").value
        .trim()
        .toLowerCase();

    const result = document.getElementById("russianResult");

    // Võrdleme kasutaja vastust sõna õige venekeelse tõlkega.
    if (answer === currentEstonian.ru.toLowerCase()) {
        result.textContent = "Õige vastus!";
        result.className = "correct";
    } else {
        result.textContent = "Vale vastus. Õige vastus: "
            + currentEstonian.ru;
        result.className = "wrong";
    }
}


// Kontrollib, kas kasutaja sisestatud eestikeelne vastus on õige.
function checkEstonian() {

    const answer = document.getElementById("estonianAnswer").value
        .trim()
        .toLowerCase();

    const result = document.getElementById("estonianResult");

    // Võrdleme kasutaja vastust õige eestikeelse sõnaga.
    if (answer === currentRussian.et.toLowerCase()) {
        result.textContent = "Õige vastus!";
        result.className = "correct";
    } else {
        result.textContent = "Vale vastus. Õige vastus: "
            + currentRussian.et;
        result.className = "wrong";
    }
}


// Loome lehe laadimisel kohe esimesed juhuslikud sõnad.
generateWords();