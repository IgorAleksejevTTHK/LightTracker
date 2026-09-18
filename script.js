
// Sõnade massiiv sisaldab hajusrakenduste teemaga seotud sõnu
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

// Hoiame meeles hetkel valitud sõnu mõlemas kontrollis.
let currentEstonian = words[0];
let currentRussian = words[0];


// Lisab kõik sõnad eestikeelsesse valikusse.
function createEstonianList() {
    const select = document.getElementById("estonianSelect");

    words.forEach((item, index) => {
        const option = document.createElement("option");

        option.value = index;
        option.textContent = item.et;

        select.appendChild(option);
    });
}


// Lisab kõik sõnad venekeelsesse valikusse.
function createRussianList() {
    const select = document.getElementById("russianSelect");

    words.forEach((item, index) => {
        const option = document.createElement("option");

        option.value = index;
        option.textContent = item.ru;

        select.appendChild(option);
    });
}


// Kui kasutaja valib eestikeelse sõna nimekirjast,
// kuvatakse see lehel ja määratakse kontrollitavaks sõnaks.
function selectEstonianWord() {
    const index = document.getElementById("estonianSelect").value;

    if (index === "") {
        return;
    }

    currentEstonian = words[index];

    document.getElementById("estonianWord").textContent =
        currentEstonian.et;

    document.getElementById("russianAnswer").value = "";
    document.getElementById("russianResult").textContent = "";
}


// Kui kasutaja valib venekeelse sõna nimekirjast,
// kuvatakse see lehel ja määratakse kontrollitavaks sõnaks.
function selectRussianWord() {
    const index = document.getElementById("russianSelect").value;

    if (index === "") {
        return;
    }

    currentRussian = words[index];

    document.getElementById("russianWord").textContent =
        currentRussian.ru;

    document.getElementById("estonianAnswer").value = "";
    document.getElementById("estonianResult").textContent = "";
}


// Genereerib mõlemasse tabeli veergu juhusliku sõna.
function generateWords() {

    // Valime juhusliku sõna massiivist.
    const randomEstonianIndex =
        Math.floor(Math.random() * words.length);

    const randomRussianIndex =
        Math.floor(Math.random() * words.length);

    currentEstonian = words[randomEstonianIndex];
    currentRussian = words[randomRussianIndex];

    // Näitame juhuslikke sõnu.
    document.getElementById("estonianWord").textContent =
        currentEstonian.et;

    document.getElementById("russianWord").textContent =
        currentRussian.ru;

    // Märgime ka vastava sõna valiknimekirjas.
    document.getElementById("estonianSelect").value =
        randomEstonianIndex;

    document.getElementById("russianSelect").value =
        randomRussianIndex;

    // Puhastame vanad vastused ja tulemused.
    document.getElementById("russianAnswer").value = "";
    document.getElementById("estonianAnswer").value = "";

    document.getElementById("russianResult").textContent = "";
    document.getElementById("estonianResult").textContent = "";
}


// Kontrollib eestikeelse sõna venekeelset vastust.
function checkRussian() {

    const answer = document
        .getElementById("russianAnswer")
        .value
        .trim()
        .toLowerCase();

    const result = document.getElementById("russianResult");

    // Võrdleme kasutaja vastust õige tõlkega.
    if (answer === currentEstonian.ru.toLowerCase()) {
        result.textContent = "Õige vastus!";
        result.className = "correct";
    } else {
        result.textContent =
            "Vale vastus. Õige vastus: " +
            currentEstonian.ru;

        result.className = "wrong";
    }
}


// Kontrollib venekeelse sõna eestikeelset vastust.
function checkEstonian() {

    const answer = document
        .getElementById("estonianAnswer")
        .value
        .trim()
        .toLowerCase();

    const result = document.getElementById("estonianResult");

    // Võrdleme kasutaja vastust õige eestikeelse sõnaga.
    if (answer === currentRussian.et.toLowerCase()) {
        result.textContent = "Õige vastus!";
        result.className = "correct";
    } else {
        result.textContent =
            "Vale vastus. Õige vastus: " +
            currentRussian.et;

        result.className = "wrong";
    }
}


// Loome mõlemad sõnade nimekirjad lehe laadimisel.
createEstonianList();
createRussianList();

// Kuvame alguses juhuslikud sõnad.
generateWords();

