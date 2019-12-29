// How to Empty an array

let numbers = [1, 2, 3, 4];
let another = numbers;
// First Solution
//numbers = [];

// Second solution
//numbers.length = 0;

// third solution
//numbers.splice(0, numbers.length)

// fourth solution
while(numbers.length > 0)
numbers.pop()


console.log(another);
console.log(numbers);
