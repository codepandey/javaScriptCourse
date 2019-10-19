/// Both function is same you can choose any one

function shownumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        if(i % 2 === 0) console.log(i, 'Even');
        else console.log(i, 'Odd');
    }
}
function shownumbers(limit) {
    for(let i = 0; i <= limit; i++) {       
        const message = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(i, message);
    }
}

shownumbers(10);