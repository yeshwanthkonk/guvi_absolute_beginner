
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var ui = [];

inp.on("line", (data) => {
  ui.push(data);
});

inp.on('close', () => {
    console.log((+ui[0]) * (+ui[1]))
})
