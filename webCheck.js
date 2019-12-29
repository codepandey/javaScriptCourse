let userEmail = 'rahul123';
let password = '1234';


let userChecker = function(mystring) {
    if((mystring.includes(123)) && (mystring.length > 6)) {
        return true
    }
    return false
}

// console.log(userChecker(userEmail));

let passChecker = function(pass) {
    if((pass.includes(1234)) && (pass.length > 8)) {
        return true
    }
    return false
}



///// how to concat two string
var str1 = 'Hello';
var str2 = 'World';
console.log(str1.concat(' ', str2));
// expected output: "Hello World"
console.log(str2.concat(' ', str1));
// expected output: "World, Hello"
