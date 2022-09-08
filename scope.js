function add(a, b) {
  // a , b, sum block scope
  const total = a + b;
  console.log(a, b);

  if (b > 5) {
    // sum block scope
    const sum = 25 + a + b;
  } else {
    const sum = 5 + a + b;
    var current = sum;
  }
  console.log(current);
  return total;
}

add(5, 7);
