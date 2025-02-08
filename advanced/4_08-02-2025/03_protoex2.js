function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.school = "Abc School";
var stud1 = new Student("Urvashi", "Bhavsar");
var stud2 = new Student("Pooja", "Patel");
console.log("<div>" + stud1.firstName + " " + stud1.lastName + " " + stud1.school + "</div> ")
console.log("<div>" + stud2.firstName + " " + stud2.lastName + " " + stud2.school + "</div> ")
