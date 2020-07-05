
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', () => {
    if((+userInput[0])%400 === 0 || (+userInput[0])%4 === 0){
        console.log("Y")
    }
    else{
        console.log("N")
    }
})
