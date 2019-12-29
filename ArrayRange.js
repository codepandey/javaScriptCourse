// const numbers = arrayFromRange(1,4);
// console.log(numbers);

// const numbers = [1, 2, -1, 3];
// const results= numbers.filter(function(value) {
//     return value >= 0 
// });

/// in arrow function

//const filtered = numbers.filter(n => n >= 0 );
// const items = results.map(value => '<li>' + value + '</li>');
// const html1 = items.join(); /// this line gives you result sepreted with comma
// const html = '<ul>' + items.join('') + '</ul>';
// console.table(html);


//// you can map as a object as well
//// here the example
// const numbers = [1, 2, -1, 3];
// const filtered = numbers.filter(n => n >= 0 );
// const results = filtered.map(n => {
//     const obj = {value: n};
//     return obj;
// } );
// console.log(results);


// const numbers = [1, 2, -1, 3];
// const filtered = numbers.filter(n => n >= 0 );
// const results = filtered.map(n => 
//      ({value: n})
     
// );
// console.log(results);





//// we can chain filter and map method
/// here the example


/////////// this is the example of chaining
    const numbers = [1, 2, -1, 3];
    const filtered = 
    numbers
        .filter(n => n >= 0 )
        .map(n => ({value: n}))
        .filter(obj => obj.value > 1)
        .map(obj => obj.value);
        console.log(filtered);








