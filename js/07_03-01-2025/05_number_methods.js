var n1 = Number(23), n2 = Number(23.33), n3 = Number("12")

console.log(n1);
console.log(n2);
console.log(n3);

console.log(Number.isFinite(n1));
console.log(Number.isFinite(n2));
// console.log(Number.isFinite(n3));

console.log(Number.isInteger(n1));
console.log(Number.isInteger(n2));

console.log(Number.parseFloat(n1));
console.log(Number.parseFloat(n2));

console.log(Number.parseInt(n1));
console.log(Number.parseInt(n2));

console.log(n1.toExponential(5));
console.log(n2.toExponential(5));

console.log(n1.toFixed(5));
console.log(n2.toFixed(5));

console.log(n1.toPrecision(5));
console.log(n2.toPrecision(5));

