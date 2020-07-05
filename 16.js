
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var ui = [];

inp.on("line", (data) => {
  ui.push(data);
});

inp.on('close', () => {
    let ma = +ui[0]
    for(let i=1;i<3;i++){
        ma = Math.max(ma, +ui[i])
    }
    console.log(ma)
})
