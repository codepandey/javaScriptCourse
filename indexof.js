const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf('a')); // it will gives you -1
console.log(numbers.indexOf(2));  // it will gives you 1 
console.log(numbers.lastIndexOf(1)); // it will gives you 3
console.log(numbers.indexOf(1) !== -1); // it will gives true because 1 is present in the array
console.log(numbers.includes(1)); // same example as above it will also gives you true
