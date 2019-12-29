// const p = new Promise((resolve, reject) => {    
// });


// join two array and short it
var arrayOne = [1,2,3,4,5];
var arrayTwo = [5,6,7,8,3,4,2];
function Unique(value, index, self) { 
    return self.indexOf(value) === index;
}

const names = arrayOne.concat(arrayTwo);
let rahul = names.filter(Unique);
console.log(rahul);
let unique = [...new Set(names)];
let result = unique.sort();
console.log(result); 








function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
// usage example:
var a = [ 1, 4, 2, 1, 4, 5,3,6,7];
var test = a.filter( onlyUnique );
let results = test.sort();
console.log(results);







