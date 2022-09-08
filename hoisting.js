for (var i = 0; i < 5; i++) {
  console.log(i);
}
// var will print this line,
// we will use let, let will give an error of this line
console.log('outside', i);

// we can access this from function from anywhere as it is hoisted globally
print5();
function print5() {
  console.log('inside print5', 5);
}

//this function will not be hoisted as declared as a variable const
//if var used, print10() will print undefined as only var print10; will be hoisted
const print10 = function () {
  console.log('inside print10', 10);
};
