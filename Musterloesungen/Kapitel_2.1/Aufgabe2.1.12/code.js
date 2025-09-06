const liste = document.getElementById("liste");
const erstesElement = liste.firstElementChild;
const neuesElement = erstesElement.cloneNode(true);
neuesElement.innerHTML="Eintrag 2"; // Besser: neuesElement.innerText="Eintrag 2";

liste.append(neuesElement);

