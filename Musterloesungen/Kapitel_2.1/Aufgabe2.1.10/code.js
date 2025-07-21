function Hotel(name, anzahlZimmer, gebuchteZimmer) {
    this.name = name;
    this.zimmer = anzahlZimmer;
    this.gebucht = gebuchteZimmer;

    this.gibFreieZimmer = function () {
        return this.zimmer - this.gebucht;
    };

    this.gibInformationen = function () {
        return 'Name des Hotels: ' + this.name +
            ', Anzahl Zimmer: ' + this.zimmer +
            ', Gebuchte Zimmer: ' + this.gebucht +
            ', Freie Zimmer: ' + this.gibFreieZimmer();
    };
}

const hotel1 = new Hotel('Quay', 45, 12);
const hotel2 = new Hotel('Park', 77, 14);

console.log(hotel1.gibInformationen());
console.log(hotel2.gibInformationen());