const numbers = [3, 4];


// Add new element in the start of the array
// unsift() method add elements in the begging of the array

numbers.unshift(6,7);


// Add new element somewhere in the middle of an array
// splice() method add elements somewhere in the middle of the array

numbers.splice(2, 0, 'a', 'b');
console.log(numbers);




// Add new Element in the end of the array;
// push() method add elements in ends of the array
numbers.push(4, 5);