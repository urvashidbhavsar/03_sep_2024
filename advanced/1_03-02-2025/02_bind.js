const person1 = {
    firstname: "Gita",
    lastname: "Patel"
}
const fulldata = {
    fullname: function () {
        return this.firstname + " " + this.lastname
    },
}
const newdata = fulldata.fullname.bind(person1)
console.log(newdata());



