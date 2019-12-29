// How to empty an array

let numbers = [1, 2, 3, 4];
let another = numbers;

// solution 1
numbers = []; // this approach will works when do not any other refrence of original array

// solution 2 // this is the better solution and easy to implement
numbers.length = 0;


// solution 3
 numbers.splice(0, numbers.length);


// solution 4
while (numbers.length > 0)
numbers.pop();
 

console.log(numbers);
console.log(another);
