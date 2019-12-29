/// declare a function that return sum of multiple of 3 and 5 between limit.
// multiple of 3 between 0 ot 10 => 3, 6, 9
// multiple of 5 between 0 ot 10 => 5, 10
// result will be => 3 + 6 + 9 + 5 + 10 = 33;

// here the solution
console.log(sum(10));

function sum(limit) {
    let sum = 0;
    
    for(let i = 0; i <= limit; i++)
    if(i % 3 === 0 || i % 5 === 0)
    sum += i;

    return sum;
}