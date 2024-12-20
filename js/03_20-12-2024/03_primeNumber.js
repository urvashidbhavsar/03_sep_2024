let num = 2
let primeCheck = true

if (num == 1) {
    console.log("The Numbe is 1")
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primeCheck = false
            break;

        }
    }
}
if (primeCheck) {
    console.log("It is Prime")
} else {
    console.log("Not Prime")
}