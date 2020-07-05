
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var ui = [];

inp.on("line", (data) => {
  ui.push(data);
});

inp.on('close', () => {
    var st = ""
    if(+ui[0] === 0){
        console.log('NULL')
    }
    else{
        for(let i=1;i<=(+ui[0]);i++){
            st += 9 * i + " "
        }
    }
    console.log(st.trim())
})
