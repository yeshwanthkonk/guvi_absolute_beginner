// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var userInput = [];

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', () => {
    if(userInput[0]<0){
        console.log("Error")
    }
    else{
        console.log((2*(22/7)*userInput[0]).toFixed(2))
    }
})
