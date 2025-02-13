class setdate extends Date {
    // for declaration of variables
    constructor() {
        // access parent variables and method
        super()
    }
}
let dt = new setdate()
console.log(dt.toString());
console.log(dt.getDate() + "-" + (dt.getMonth() + 1) + "-" + dt.getFullYear());
