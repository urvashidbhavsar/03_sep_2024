class Student {
    constructor(id, name, add, mno) {
        this.id = id;
        this.name = name;
        this.add = add;
        this.mno = mno;
    }
}
class study extends Student {
    constructor(id, name, add, mno, std) {
        super(id, name, add, mno)
        this.std = std
    }
}
let s1 = new study(1, "Jiya", "Surat", 7894561230, 11)
console.log(s1);
