
const autos: string[] = ["Audi", "BMW", "Mercedes", "Volkswagen"];
autos.push("Fiat");
console.log(autos);

// type error
// autos.push(2);


// alternative Methode über eigenen Typ
type StringArray = Array<string>;
const autos2: StringArray = ["Audi", "BMW", "Mercedes", "Volkswagen"];
autos2.push("Fiat");
console.log(autos2);

// type error
// autos2.push(2);

