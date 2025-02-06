const decrement = (number) => {
    if (number === 0) return
    console.log(number)
    decrement(number - 1)
}
decrement(5);


// =================
const numberdisplay = (start, end) => {
    if (end === start) return;
    console.log(start);
    numberdisplay(start - 1, end)
}
numberdisplay(30, 21)