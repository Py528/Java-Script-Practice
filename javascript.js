const originals = [1, 2, 3, 8];

const doubled = originals.map((item) => item * 2);

// console.log(doubled);

const pranav= (a, b=12) =>{
    return a*b
}
console.log(pranav(12));

const log= (a) => {console.log(a)}
outer(function(){log("1")}())

setTimeout(function(){log("3")},6000)

function outer(){log("2")}