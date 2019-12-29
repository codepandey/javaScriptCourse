//// write a function whose return Average
// Average: 80 + 80 + 50 = 210/3 = 70
// if grade: 0-59 => F
// if grade: 60-69 => D
// if grade: 70-79 => C
// if grade: 80-89 => B
// if grade: 90-100 => A


const marks = [80, 80, 50];

console.log(calculateGrade(marks));
////////////////////////////////////////////////////////////////////
///// There are three way to write this solution
/// here First one
function calculateGrade(marks) {
    let sum = 0;

    for(let mark of marks)
        sum += mark;
    let average = sum / marks.length;
    if(average >= 0 && average <= 59) return 'F'
    if(average >= 60 && average <= 69) return 'D'
    if(average >= 70 && average <= 79) return 'C'
    if(average >= 80 && average <= 89) return 'B'
    if(average >= 90 && average <= 100) return 'A'
}
//////////////////////////////////////////////////////////////
//////// here second one
function calculateGrade(marks) {
    let sum = 0;

    for(let mark of marks)
        sum += mark;
    let average = sum / marks.length;
    if(average < 60) return 'F'
    if(average < 70) return 'D'
    if(average < 80) return 'C'
    if(average < 90) return 'B'
         return 'A'   
}
/////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////
//// here the third solution
// this is example of single responsibilty principle
function calculateGrade(marks) {
    const average = calculateAverage(marks);
    let average = sum / marks.length;
    if(average < 60) return 'F'
    if(average < 70) return 'D'
    if(average < 80) return 'C'
    if(average < 90) return 'B'
         return 'A'   
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length    
}
/////////////////////////////////////////////////

