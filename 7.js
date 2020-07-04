

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var userInput = []
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', () => {
    if(userInput[0]<1 || userInput[0]>12){
        console.log("Error")
    }
    else if(userInput[0] > 7){
        if(userInput[0]%2 === 0){
            console.log(31)
        }
        else{
            console.log(30)
        }
    }
    else{
        if(userInput[0] == 2){
            console.log(28)
        }
        else if(userInput[0]%2 === 0){
            console.log(30)
        }
        else{
            console.log(31)
        }
    }
})
