
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', () => {
    let co = 0;
    for(let i=0;i<userInput[0].length;i++){
        if(userInput[0][i] != " "){
            co++;
        }
    }
    console.log(co)
})
