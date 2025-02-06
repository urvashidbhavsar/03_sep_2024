let person = {
    firstname: "jiya",
    lastname: "das",
    address: {
        townadd: "Adajan",
        city: "Surat"
    }
}
// short cut => person.address && person.address.city
if (person.address?.city === "Surat") {
    console.log("Exist");
} else {
    console.log("Not Exist");
}