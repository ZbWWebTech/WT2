type kursStatus = "aktiv" | "inaktiv";

interface Kurs {
    id: number;
    bezeichnung: string;
    dozent: string;
    status: kursStatus;
}

//Besser: class CKurs implements Kurs {
class CKurs implements Kurs {
    id: number;
    bezeichnung: string;
    dozent: string;
    status: kursStatus;

    constructor(id: number, bezeichnung: string, dozent: string, status: kursStatus) {
        this.id = id;
        this.bezeichnung = bezeichnung;
        this.dozent = dozent;
        this.status = status;
    }
}

function toArray(o: any): string[] {
    if (typeof o === "string") {
        return [o];
    }

    if (Array.isArray(o)) {
        return o;
    }

    if (o instanceof CKurs) {
        // rekursiver Aufruf mit einem "String" als Parameter
        return toArray(o.id+":"+o.bezeichnung+"@"+o.dozent+"="+o.status);
    }

    return [];
}

const wt1=new CKurs(1,"WebTech 1","Rene Pilz","aktiv");

console.log(toArray("Hello"));
console.log(toArray(["Hello", "World"]));
console.log(toArray(123));
console.log(toArray(wt1));


