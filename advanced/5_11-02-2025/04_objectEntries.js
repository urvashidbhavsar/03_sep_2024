let myobj = {
    firstname: "Abc",
    lastname: "Xyz"
}

// let obj1 = Object.entries(myobj)[0]
// console.log(obj1)

// let obj2 = Object.entries(myobj)[1]
// console.log(obj2)

// for (const obj in myobj) {
// console.log(`${obj} => ${myobj[obj]}`);
let data = Object.entries(myobj)
console.log(data);
// }