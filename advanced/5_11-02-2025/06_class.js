// class Employee {
const Employee = class {
    constructor(id, name, sal) {
        this.id = id;
        this.name = name;
        this.sal = sal;
    }
    printData() {
        console.log(`${this.id} => ${this.name} => ${this.sal}`);
    }
}
let e1 = new Employee(1, "Hitesh", 23000)
e1.printData()
let e2 = new Employee(2, "Gaurav", 26000)
e2.printData()
