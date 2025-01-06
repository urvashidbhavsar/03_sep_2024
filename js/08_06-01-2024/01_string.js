var str = "Hello World, welcome to tops";

console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.codePointAt(0));
console.log(str.concat("!!!!!!!"));
console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));
console.log(str.search("W"));
console.log(str.match("World"));
console.log(str.replace("World", "User"));
console.log(str.substring(2, 9));
console.log(str.slice(2, 9));
console.log(str.split(" "));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

str = "          top            "
console.log(str);
console.log(str.trim());



