// How to sort an array

const numbers = [2, 3, 1];
numbers.sort(); // sort method set it in a alphabetical or numric way
console.log(numbers);


/// Here the exmple of reverse() method

numbers.reverse();
console.log(numbers);


const name = ['rahul', 'aman', 'santosh']
name.sort();
console.log(name);


let arrayOne = [1,2,3,4];
let arrayTwo = [5,4,3,2,1];

let combined = arrayOne.concat(arrayTwo);
let result = combined.filter(function(item, pos, combined) {
    return combined.indexOf(item) == pos;
})
console.log(result);



