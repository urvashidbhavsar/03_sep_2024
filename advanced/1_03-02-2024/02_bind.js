const person1 = {
    firstname: "Gita",
    lastname: "Patel"
}
const fulldata = {
    fullname: function (firstname, lastname) {
        return this.firstname + " " + this.lastname
    }
}
const newdata = fulldata.fullname.bind(person1)
console.log(newdata());



