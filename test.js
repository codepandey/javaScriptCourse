// hello = () => "Hello World!";
// console.log(hello());

// hello = (val) => "Hello " + val;
// console.log(hello('rahul'));




// var person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id         : 5566,
//     myFunction : function() {
//       return this;
//     }
//   };
//   console.log(person.myFunction());

// call and apply method
// The call() method takes arguments separately.
// var obj = {num: 2};
// var addToThis = function(a, b, c) {
//     return this.num + a + b + c;
// }
// console.log(addToThis.call(obj, 1,2,3));  // functionname.call(obj, function argument)

// var arr = [1,2,3];

// console.log(addToThis.apply(obj, arr));





// apply method
// The apply() method accepts arguments in an array:
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var arr = ["India", "Bharat"]
  console.log(person.fullName.apply(person1, arr));



