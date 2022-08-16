const originals = [1, 2, 3, 8];

const doubled = originals.map((item) => item * 2);

// console.log(doubled);

const pranav = (a, b = 12) => {
  return console.log(pranav(12));
};

const log = (a) => {
  console.log(a);
};


let add7 = () => {
    let a = prompt("never used before");
  return parseInt(a) + 7;
};

function multiply(){
    let a = prompt()
    let b = prompt()
    return a*b
}

let capitalize = () => {
    let a = prompt("Enter a string")
    let cap = a.charAt(0);
    return (alert(cap.toUpperCase()+a.slice(1)))
}

let lastLetter= function(){
    let a = prompt()
    return (alert(a.slice(-1)))
}()
