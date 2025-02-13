class main {
    display() {
        console.log("display method of parent class");
    }
}
class sub extends main {
    display() {
        console.log("display method of child class");
    }
}
let s = [new main(), new sub()]
s.forEach(dis => {
    dis.display()
})
