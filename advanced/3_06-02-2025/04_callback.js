function function1(function2) {
    function2
}
function function2() {
    console.log("Function 2  called");
}
function1(function2())
// ========================================

function result(res) {

}
function addition(x, y) {
    console.log(`Addition is : ${x + y}`);
}
result(addition(3, 5))