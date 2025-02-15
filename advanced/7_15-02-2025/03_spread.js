var num1 = [6, 2, 222]
var num2 = [7, 3, 441, 11]

var allnums = [...num1, ...num2]
console.log(allnums);


const person = {
    firstname: "urvashi",
    lastname: "bhavsar"
}
const data = {
    job: "tops"
}
const per = { ...person, ...data };
console.log(per);