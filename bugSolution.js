function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input types';
  }
}

console.log(foo(1, '2')); // Output: Invalid input types
console.log(foo(1,2)); // Output 3