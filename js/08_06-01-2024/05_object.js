var book = {
    bookname: "Java",
    author: "y.k.",
    origin: "oracle",
    price: 300
}
console.log(book);
console.log(book.bookname);
console.log(book.origin);

// use for in loop 
console.log("----------");
for (const b in book) {
    console.log(b + "=>" + book[b]);
}


