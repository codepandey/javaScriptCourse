/// Number divisible by 3 => Fizz
/// Number divisible by 5 => Buzz
/// Number divisible by both 3 & 5 => FizzBuzz
/// Number not divisible by 3 and 5 => your input number


const output = FizzBuzz(true);
console.log(output);

function FizzBuzz(input) {
    if(typeof input !== 'number')
   // return 'Not a number';
   return NaN;

    // if(input % 3 === 0 && input % 5 === 0) // this is also same as below
    if((input % 3 === 0) && (input % 5 === 0)) 
        return 'FizzBuzz';

    if(input % 3 === 0)
        return 'Fizz';

    if(input % 5 === 0)
        return 'Buzz';


        return input;
}






