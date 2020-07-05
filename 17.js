
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var ui = [];

inp.on("line", (data) => {
  ui.push(data);
});

inp.on('close', () => {
    if(+ui[0] < 0){
        console.log("Error")
    }
    else if(+ui[0] === 0){
        console.log(0)
    }
    else{
        console.log((+ui[0]) ** 2)
    }
})
