const items = [1, 29, 47];
const copy = [];

items.forEach(function(item){
  copy.push(item*item);
});
console.log(copy);


// function hello() {
//   for(let item of items) {
//     copy.push(item*item)
//   }
//   console.log(copy);
// }
// hello();




// join() method in javaScript
// The join() method returns the array as a string.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join(); // this will gives you array as a string
console.log(fruits);
console.log(energy);
//////////////////////////////////////////
// The keys() method returns an Array Iterator object with the keys of an array.
var fruit = ["Banana", "Orange", "Apple", "Mango"];
var fk = fruit.keys();
for (x of fk) {
    console.log(x);
  }

  //////////////////////////////





  for(let i=0; i<5; i++) {
    console.log('hello world', i);
  }
  
  

