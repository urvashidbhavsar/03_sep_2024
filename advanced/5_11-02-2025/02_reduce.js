let allnumbers = [11, 12, 14, 13, 55]
let sum = allnumbers.reduce((total, index) => {
    return total += index
}, 10)
console.log(sum);
