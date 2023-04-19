// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i
//     };
//     console.log(a[index])
// }

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
  	a[i] = i * i
  };
  return function(index) {
      console.log(a[index])
  }
}

console.time("6")
let closure = find();
// closure(6)
console.timeEnd("6")