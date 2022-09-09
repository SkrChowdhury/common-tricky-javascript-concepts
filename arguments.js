function sum(a, b, c) {
  console.log(arguments); // inside a function
  //output array like object
  //[Arguments] { '0': 23, '1': 34, '2': 45, '3': 43, '4': 45, '5': 67 }
  const args = [...arguments];
  console.log(args);
  //   output :  [ 23, 34, 45, 43, 45, 67 ]
  const result = a + b + c;
  return result;
}

const total = sum(23, 34, 45, 43, 45, 67);
console.log(typeof sum); // output: function
console.log(sum.length); // output: 3 (parameter number)
console.log(total);
