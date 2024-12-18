let a = 5, b = 3, res;

// 5 == 0101  use as ~ 110
// 3 == 0011
// -------------
//      0001   &
//      0111   | 
//      0110   ^

res = (a & b)
console.log(res); // 1

res = (a | b)
console.log(res); // 7

res = (a ^ b)
console.log(res);  // 6

res = ~a
console.log(res);

res = (a << 2) // 0000 0101 = 0000 1010 = 10 o/p
// 0000 0101 = 0001 01 00 = 20 o/p
console.log(res);

res = (a >> 2) // 0000 0101 = 0000 0010 = 2 o/p
// 0000 0101 = 0000 0001 = 1 o/p
console.log(res);


