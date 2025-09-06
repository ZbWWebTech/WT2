

async function datenLaden() {
    const response = await fetch("data.json");
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();

    const inhalt = document.getElementById("inhalt");
    inhalt.innerText=result.text;
}

// Funktion datenLaden an den Event click binden
const button = document.getElementById("button");
button.addEventListener("click", datenLaden);
