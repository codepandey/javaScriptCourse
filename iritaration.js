const numbers = [1, 2, 3, 4];


///// below both example is same to iritrate 
for(let number of numbers)   
    console.log(number);
////////////////////////////////////
// this is the example of an arrow function with forEach loop
numbers.forEach(number => console.log(number));