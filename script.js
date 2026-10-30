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

let currentEstonian;
let currentRussian;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function generateWords() {
    currentEstonian = getRandomWord();
    currentRussian = getRandomWord();

    document.getElementById("estonianWord").textContent = currentEstonian.et;
    document.getElementById("russianWord").textContent = currentRussian.ru;

    document.getElementById("russianAnswer").value = "";
    document.getElementById("estonianAnswer").value = "";

    document.getElementById("russianResult").textContent = "";
    document.getElementById("estonianResult").textContent = "";
}

function checkRussian() {
    const answer = document.getElementById("russianAnswer").value.trim().toLowerCase();
    const result = document.getElementById("russianResult");

    if (answer === currentEstonian.ru.toLowerCase()) {
        result.textContent = "Õige vastus!";
        result.className = "correct";
    } else {
        result.textContent = "Vale vastus. Õige vastus: " + currentEstonian.ru;
        result.className = "wrong";
    }
}

function checkEstonian() {
    const answer = document.getElementById("estonianAnswer").value.trim().toLowerCase();
    const result = document.getElementById("estonianResult");

    if (answer === currentRussian.et.toLowerCase()) {
        result.textContent = "Õige vastus!";
        result.className = "correct";
    } else {
        result.textContent = "Vale vastus. Õige vastus: " + currentRussian.et;
        result.className = "wrong";
    }
}

generateWords();