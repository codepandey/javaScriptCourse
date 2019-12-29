/// Print start patter with increasing order
showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) 
        pattern += '*';
        console.log(pattern);
    }
}


/// Print start pattern with decreasing order
for (var i = 5; i >= 1; i--) {
    var ouput = "";
    for (var j = i; j >= 1; j--) {
        ouput += "*"
    }
    console.log(ouput);
}