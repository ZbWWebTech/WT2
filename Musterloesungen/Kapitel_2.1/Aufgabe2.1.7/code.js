const average = (...args) => {
    return args.reduce((total, current, index, array) => {
        total += current;
        return index === array.length - 1 ? total / array.length : total;
    });
}




console.log(average(1, 2, 3, 4, 5, 6, 7));
console.log(average(23, 45, 67, 34));
console.log(average(12, 57));
