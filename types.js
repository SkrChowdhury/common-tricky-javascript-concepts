// Strongly typed Language
int a = 5;
string b = "string";
bool c = true;
int[] numbers = [12, 34, 56];
string[] numbers = ['a', 'b', 'c'];
object student = { id: 2, class: 4 };

// JavaScript is a dynamic typed Programming Language

// Primitive Type
const a = 5;
const b = 'String';
const c = true;

// Non-Primitive Type
const numbers = [12, 34, 56];
const student = { id: 2, class: 4 };

console.log(typeof a, typeof b, typeof c, typeof numbers, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'Web Developer' };
let q = p;
q = { job: 'Backend Developer' };
console.log(p, q);
