let number = max(1, 2);
console.log(number);

///// All three approch is quivalant
function max(a, b) {
    if(a > b) return a;
    else return b;
}
//////////////////////////////////
function max(a, b) {
    if(a > b) return a;
     return b;
}
/////////////////////////////////
function max(a, b) {
   return (a > b) ?  a : b;
}