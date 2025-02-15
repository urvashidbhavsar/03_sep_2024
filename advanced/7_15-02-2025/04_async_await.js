const myfunc = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello")
        }, 2000);
    })
}
console.log(myfunc());

// ==================================
const newfunc = async () => {
    return "Hello world"
}
newfunc().then(resolve => console.log(resolve))

// ========================================
const newfunc1 = async () => {
    var str = "Hello world!!!!!!";
    var wait = await myfunc();
    console.log(str);
    // console.log(wait);
    return wait
}
newfunc1().then(result => console.log(result));


