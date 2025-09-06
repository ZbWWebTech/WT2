type kursStatus = "aktiv" | "inaktiv";

interface Kurs {
    id: number;
    name: string;
    dozent: string;
    status: kursStatus;
}

//Besser: class CKurs implements Kurs {
class CKurs implements Kurs {
    id: number;
    name: string;
    dozent: string;
    status: kursStatus;

    constructor(id: number, name: string, dozent: string, status: kursStatus) {
        this.id = id;
        this.name = name;
        this.dozent = dozent;
        this.status = status;
    }
}

const wt1:Kurs = new CKurs(1, "Webtechnologien 1", "Rene Pilz", "aktiv");

console.log("Kurs "+wt1.id+": " + wt1.name + " mit " + wt1.dozent + " in Status " + wt1.status);
