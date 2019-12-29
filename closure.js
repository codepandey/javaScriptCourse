// let add = function(x) {
//   return function(y) {
//     return x + y;
//   };
// };

// console.log(add(2)(3));

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

//////////////////////////////////////////////

function add(x) {
  return function(y) {
    if (typeof y !== "undefined") {
      x = x + y;
      return arguments.callee;
    } else {
      return x;
    }
  };
}

console.log(add(1)(2)(3)()); //6
console.log(add(1)(1)(1)(1)(1)(1)()); //6

// var passed = 3;
// var addTo = function() {
//   var inner = 2;
//   return inner + passed;
// };
// console.dir(addTo());

var addTo = function(passed) {
  var add = function(inner) {
    return passed + inner;
  };
  return add;
};
