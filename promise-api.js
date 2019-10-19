// Promsise that already resolve 
    const p = Promise.resolve({ id: 1});
    p.then(result => console.log(result));


// Promise that already rejected
// We should all use a error object when a promise is rejected in stead of simle string  
    const q = Promise.reject( new Error('Reason for rejection') );
    q.catch(error => console.log(error));


// Here the example of simple string error message
    const r = Promise.reject('Reason for rejection');
    r.catch(error => console.log(error));




    