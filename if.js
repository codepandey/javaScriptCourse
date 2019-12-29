// short courses by there name
// in first example after sort() method  javascript should come first but nodejs is coming first
// Because in ascii table the value of small 'j' is greater than Caps 'N'
// How can we fix it see second example



// first example


// const courses = [
//     { id: 1, name: 'Node.js' }, 
//     { id: 2, name: 'javaScript' }
// ];
// courses.sort(function (a, b) {
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
// });
// console.log(courses);


/////////////////////////////////////////////////

// second  example

const courses = [
    { id: 1, name: 'Node.js' }, 
    { id: 2, name: 'javaScript' }
];
courses.sort(function (a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses);
