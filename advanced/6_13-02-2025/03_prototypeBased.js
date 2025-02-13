class person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
// another constructor
class employee extends person {
    constructor(name, doj, sal) {
        super(name)
        this.doj = doj;
        this.sal = sal;
    }
}
// var per = new person("Urvashi");
// employee.prototype = per; // person treat as a parent of emp
var emp = new employee("Urvashi", "10-05-2024", 25000);
console.log(`${emp.getName()} | ${emp.doj} | ${emp.sal}`);