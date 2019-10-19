// Task //
// sum (1,2,3,4) => 10
// sum ([1,2,3,4]) => 10
//////////////////////////////////////////

// if you pass an array inside sum it will gives you an array
/// How can you solve it
// go throw below example
function sum(...items) {
    return items.reduce((a, b) => a + b);
}
// console.log(sum([1, 2, 3, 4]));
/////////////////////////
// here the solution
function sum(...items) {
    if(items.length == 0 && Array.isArray(items[0]))
    items = [...items[0]];
    return items.reduce((a, b) => a + b);
}
console.log(sum([1, 2, 3, 4]));