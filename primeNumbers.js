

/// write a function that gives you prime number
// Prime number => whose factors are only 1 and its self

showPrimes(10);

//////////////// first solution
function showPrimes(limit) {
    for(let number = 2; number <= limit; number++) {
            let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if(number % factor === 0) {
                isPrime = false;
                break;
            }               
        }
            if (isPrime) console.log(number);
    }
}


/////////////////////////////////////////////////////////////
/// second solution
// with principle of single responsiblity
function showPrimes(limit) {
    for(let number = 2; number <= limit; number++) 
        if (isPrime(number)) console.log(number);    
}

function isPrime(number) {      
    for (let factor = 2; factor < number; factor++) 
    if(number % factor === 0)         
        return false; 

    return true;
}


