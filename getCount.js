const numbers = [1, 2, 3, 4];
const max = getMax([1,2,4]);
console.log(max)


/// how to get maximum value from an array
// here the first solution
// function getMax(array) {
//     if(array.length === 0) return undefined;
//     let max = array[0];
//     for(let i = 1; i < array.length; i++) 
//         if(array[i] > max)
//         max = array[i]

//         return max;
    
// }

/////// here the second solution 
/////// with reduce method

// function getMax(array) {
//     if(array.length === 0) return undefined;
//    array.reduce((accumulator, current) => {
//        if(current > accumulator) return current;
//        return accumulator;      
//    })    
// }

///// here the same solution with less code

function getMax(array) {
    if(array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b)    
}