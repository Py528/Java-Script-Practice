console.log("Hello Node!")

let log = (log) =>{
    console.log(log)
}

let getInfo = {
    name:"Pranav",
    age:18,
    standard:"TYCM A",
    rollNo:50
}
let arr=["name",'age','standard','rollNo']
function randomSelection(){
    let a = Math.floor(Math.random() * arr.length)
    return arr[a];
}

// getInfo[]
// log(randomSelection())
// log(getInfo[randomSelection()])

const age=234;
ams=123;
let a=123;
var c=123;
log(typeof ams)