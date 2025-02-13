function stud(name) {
    this.name = name
    throw new Error("You cant create instance of abtract class")
}
stud.prototype.getname = function () {
    console.log(this.name);
}
let s = new stud("Abc")
s.getname()