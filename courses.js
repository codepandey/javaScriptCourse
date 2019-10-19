const courses = [
{ id: 1, name: 'a'},
{ id: 12, name: 'b'}
];

var course1 = courses.find(function(course) {
    return course.name === 'a'
});

// course 2 is the same as course1 with arrow function
var course2 = courses.find((course) =>   course.name === 'a' );
   

var course3 = courses.findIndex(function(course) {
    return course.name === 'a'
});
console.log(course1);
console.log(course2);
console.log(course3);