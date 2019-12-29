
/// A function prefer local variable over global variable
const color = 'red';

function start() {   
    const color = 'blue' 
    const message = 'Hello'
    console.log(message);
    console.log(color);
}
function stop() {    
    const message = 'Bye';
    console.log(message);
}

start();
stop();