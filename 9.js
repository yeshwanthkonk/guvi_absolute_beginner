
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var userInput = []
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', () => {
    let temp = userInput[0].split(" ")
    if(temp[0]>temp[1]){
        console.log(temp[1])
    }
    else{
        console.log(temp[0])
    }
})
