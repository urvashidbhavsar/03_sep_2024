var str = "Hello World!!!!!!",
    ptn = /^[a-z\s\W]*$/i
if (ptn.test(str)) {
    console.log("Match");
} else {
    console.log("Not Match");
}

var num = 1233,
    ptn = /^[0-9]*$/
// if you have only string value then use match() method otherwise use test().
// if (num.match(ptn)) {
if (ptn.test(num)) {
    console.log("Number Match");
} else {
    console.log("number not Match");
}