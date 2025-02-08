class Employee {
    // compulsory created for access or create variables and methods
    constructor(id, ename) {
        this.id = id;
        this.ename = ename;
    }

    // define method for print data
    printdata() {
        return this.id + "=>" + this.ename
    }
}
let e1 = new Employee("1", "Ritesh")
let e2 = new Employee("2", "Gita")
console.log(e1.printdata());
console.log(e2.printdata());

// console.log(e1.id);
// console.log(e1.ename);
