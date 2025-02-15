var prog = new Promise((resolve, reject) => {
    let order = "fail"
    if (order === "success") {
        resolve("order completed")
    } else {
        reject("out of stock")
    }
})
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject))