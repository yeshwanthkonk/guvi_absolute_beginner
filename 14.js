
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on('close', () => {
    console.log( (+userInput[0]) ** 3)
})
