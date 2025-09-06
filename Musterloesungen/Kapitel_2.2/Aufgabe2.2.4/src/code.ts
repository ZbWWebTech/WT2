interface Kurs {
    id: number;
    name: string;
    dozent: string;
}

//Besser: class CKurs implements Kurs {
class CKurs {
    id: number;
    name: string;
    dozent: string;

    constructor(id: number, name: string, dozent: string) {
        this.id = id;
        this.name = name;
        this.dozent = dozent;
    }
}

const wt1:Kurs = new CKurs(1, "Webtechnologien 1", "Rene Pilz");

console.log("Kurs "+wt1.id+": " + wt1.name + " mit " + wt1.dozent);
console.log(typeof wt1);
console.log(wt1 instanceof CKurs);
