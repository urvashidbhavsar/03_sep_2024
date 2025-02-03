const person1 = {
    firstname: "Gita",
    lastname: "Patel"
}
const person2 = {
    firstname: "Priyanka",
    lastname: "Patel"
}
const fulldata = {
    fullname: function () {
        return this.firstname + " " + this.lastname
    }
}
console.log(fulldata.fullname.call(person1));
console.log(fulldata.fullname.apply(person2));


