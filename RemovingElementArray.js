const numbers = [1, 2, 3, 4];


  // Remove element from begging from an array
  // shift() method remove from begging from an array
  const first  = numbers.shift();
  console.log(first);

// Removimg element somewhere in the middle of an array
// splice() method remove elements somewhere in the middle of the array

const middle = numbers.splice(2, 1);
console.log(middle);
console.log(numbers);




// Remove last element from an arry
// pop() method remove an element from end of an array
const last  = numbers.pop();
console.log(numbers);
console.log(last);


