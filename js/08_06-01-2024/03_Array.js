// create an array
var subjects = ["JavaScript", "Java", "CSS", "HTML", "Node", "React", "Angular"]

// execute array value 
console.log(subjects[0]);

// use loop for print array
console.log("=== for of ======");
for (const sub of subjects) {
    console.log(sub);
}

console.log("=== forloop ======");
for (let i = 0; i < subjects.length; i++) {
    console.log((i + 1) + "=>" + subjects[i]);
}

console.log("====for each=====");
subjects.forEach(s => {
    console.log(s);
});
