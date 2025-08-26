const data = require("fs");
data.writeFileSync("hello.txt", "Hello Node.js");

let readData = data.readFileSync("hello.txt", "utf-8");
console.log(readData);

data.appendFileSync("hello.txt", "- Practice makes perfect");
readData = data.readFileSync("hello.txt", "utf-8");
console.log(readData);
