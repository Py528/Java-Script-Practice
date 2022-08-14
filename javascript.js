const originals = [1, 2, 3, 8];

const doubled = originals.map((item) => item * 2);

console.log(doubled);

function pranav() {
  return (function () {
    return console.log("return pranav");
  })()
}
pranav();
