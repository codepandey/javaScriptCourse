const numbers = [1, 2, 3, 4];

// const last = numbers.pop(1); // pop method remove item from end of the array
// console.log(last);
// console.log(numbers);


// const first = numbers.shift(1);
// console.log(first);
// console.log(numbers);


const result = numbers.splice(2, 2);
console.log(result);
console.log(numbers);