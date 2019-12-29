let numbers = [1, 2, -1, 3];
let sum = 0;

for(let n of numbers) 
    sum += n;
    console.log(sum);

    /// How to reduce an array
    // we can reduce by using reduce method
    // if you are supply initial value 0;
    // a = 0, c = 1 => a = 1 
    // a = 1, c = -1 => a = 0
    // a = 0, c = 2 => a = 2 
    // a = 2, c = 3 => a = 5

    let result =  numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0); // zero is initial value for accumulator
    console.log(result);




    /// How to reduce an array
    // we can reduce by using reduce method
    // if you are not supply any initial value so it will take first value from the array;  ;
    // a = 1, c = -1 => a = 0
    // a = 0, c = 2 => a = 2    
    // a = 2, c = 3 => a = 5

    let result =  numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
     );
console.log(result);

