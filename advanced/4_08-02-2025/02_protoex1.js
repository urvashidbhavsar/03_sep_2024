function student(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
student.prototype.getfullname = function () {
    // return this.firstname + " " + this.lastname
    return `User firstname is : ${this.firstname} and lastname is : ${this.lastname}`
}
// create an object for calling class
// this method is one type of abtraction
let s1 = new student("Kunal", "Singh")
let s2 = new student("Hina", "Patel")
console.log(s1.getfullname());
console.log(s2.getfullname());


// let dt = new Date()
// dt.getDate()
