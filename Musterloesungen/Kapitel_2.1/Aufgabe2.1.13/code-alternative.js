

function datenLaden() {
    fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
        const inhalt = document.getElementById("inhalt");
        inhalt.innerText=json.text;
    });
}

// Funktion datenLaden an den Event click binden
const button = document.getElementById("button");
button.addEventListener("click", datenLaden);
