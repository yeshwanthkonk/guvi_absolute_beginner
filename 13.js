
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on('close', () => {
    let temp = userInput[0].split(" ")
    let a = +temp[0]
    let b = +temp[1]
    let c = +temp[2]
    let delta = Math.sqrt((b * b) - (4 * a * c))
    let X1 = (-(b) + delta)/(2*a)
    let X2 = (-(b) - delta)/(2*a)
    console.log(X1.toFixed(2))
    console.log(X2.toFixed(2))
})
