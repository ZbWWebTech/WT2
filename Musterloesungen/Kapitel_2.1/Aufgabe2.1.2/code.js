let a = 1;
let b = 1 + '12';
let c = '1';
let d = '';

console.log(a == true);     // true
console.log(a === false);   // false 

console.log(b == 112);      // true
console.log(b === 112);     // false
console.log(b === '112');   // true

console.log(c == true);     // true
console.log(c === true);    // false

console.log(d == true);     // false
