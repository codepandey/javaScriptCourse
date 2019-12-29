const numbers = [1, 2, -1, 3];
let filtered = numbers.filter(n => n >= 0 );
// console.table(filtered);

let  result = filtered.map(n => '<li>' + n + '<li>');
console.table(result);