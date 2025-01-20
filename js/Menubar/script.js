function toggleMenu() {
    let nav = document.querySelector(".navbar")
    nav.classList.toggle("navigationbar")
}

let header = document.querySelector("header")
window.addEventListener("scroll", () => {
    let current = window.scrollY;
    if (current > 0) {
        header.classList.add("changeheader")
    } else {
        header.classList.remove("changeheader")
    }
})