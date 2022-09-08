/*

8 Ways to get Undefined

1. variable that is not initialized will give undefined.
2. function with no return
3. parameters that is not passed will be undefined.
4. if return has nothing on the right side will return undefined.
5. property that doesn't  exists on an object will give you undefined.
6. accessing array elements outside of the index range.
7. deleting an element inside an array
8. set a value directly to undefined.

*/

// 1.
let first;
console.log(a);
// 2.
function second(a, b) {
  const total = a + b;
}
const result = second();
console.log(result);

// 3.
function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
//a = 2, b = 5
//c,d will be undefined then
third(2, 5);

// 4.
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}

noNegative(2, 5);

// 5.
const fifth = { id: 2, name: 'ponchom', age: 30 };
console.log(fifth.age, fifth.salary);

// 6.
const sixth = [4, 67, 45, 23, 67, 65];
console.log(sixth[1], sixth[200]);

// 7.
const seventh = [4, 67, 45];
//you should not do it. instead use splice
delete seventh[1];
console.log(seventh); // [4, <1 empty item>,67, 45];

// 8.
const eighth = undefined;
const eighth2 = null;
const data { result:[], updated: null};

console.log(typeof undefined); // undefined
console.log(typeof null); // object