const add = () => {

}

const add1 = (() => {
    let count = 1;

    return function () {
        count += 1
        return count
    }
})()
console.log(add1());
