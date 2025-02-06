let myarr = ["pink", "blue", "red", "black", "white", "gray"]

// print array 
console.log(myarr[0]);

// loop 
console.log("==== for loop ====");
for (let i = 0; i < myarr.length; i++) {
    console.log(`${i + 1} => ${myarr[i]}`);
}

// add any value in array form end
myarr.push("Yellow", "Brown")
console.log("==== for of ====");
let index = myarr.keys()
for (const i of index) {
    console.log(`${i} => ${myarr[i]}`);
}

// add array from begin
myarr.unshift("Violet");
console.log("==== for each ====");
// myarr.forEach(items => {
//     console.log(items)
// })
myarr.forEach((items, i) => {
    console.log(`${i} => ${items}`);
})


// remove from begin
myarr.shift();
// remove from end
myarr.pop()
console.log("==== ======== ====");
myarr.forEach(items => {
    console.log(items)
})

let mystring = "Welcome, Hello world!!"
console.log(mystring.split(","));
console.log(Array.from("hello world"));

