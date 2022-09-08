/*
Truthy:
1.true
2. Any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string.
4. '0', 'false'
5. {} object
6. [] array

Falsy:
1.false
2. 0 (zero)
3. '' (empty string)
4. undefined
5. null

*/

const x = false;

if (x) {
  console.log('value of x is truthy');
} else {
  console.log('value of x is falsy');
}

//optional
//check falsy
const y = '';
if (!y) {
  console.log('value is falsy');
}

// check truthy
const z = ' ';
if (!!z) {
  console.log('value is truthy');
}
