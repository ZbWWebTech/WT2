const sum = (...args) => {
    let sum = 0;
    for (let c = 0; c < args.length; c++) {
        sum += args[c];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7));
console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));