interface Kurs {
    id: number;
    name: string;
    dozent: string;
}

const wt1: Kurs = {
    id: 1,
    name: "Webtechnologien 1",
    dozent: "Rene Pilz",
}

const wt2: Kurs = {
    id: 2,
    name: "Webtechnologien 2",
    dozent: "Rene Pilz",
}

console.log("Kurs "+wt1.id+": " + wt1.name + " mit " + wt1.dozent);
console.log("Kurs "+wt2.id+": " + wt2.name + " mit " + wt2.dozent);
console.log(typeof wt1);
