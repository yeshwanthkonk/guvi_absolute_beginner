
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on('close', () => {
    console.log(((Math.sqrt(3) * (+userInput[0]) * (+userInput[0]))/4).toFixed(2))
})
