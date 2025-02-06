// series of function
function multiply(num1) {
    return function (num2) {
        return num1 * num2
    }
}
let mul = multiply(3)(4)
console.log(mul)