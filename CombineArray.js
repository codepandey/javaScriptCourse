// How to join Two array

const first = [1, 2, 3];
const second = [4, 5, 6];
/// first approach
const combined = first.concat(second);
///// second approcb
const slice = combined.slice();


///// You can join two array with the help of spread operator
/// with the help of spread operator you can add more element in an array

const result = [...first, 'a', ...second, 'b'];
const copy = [...result];
console.log(result);
