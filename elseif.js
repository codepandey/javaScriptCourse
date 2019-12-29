// Hour
// if the hour between 6am to 12pm: good morning
// if the hour between 12pm to 6pm : good after noon
// Otherwise: good evening

///////////////// solution ///////////////

    let hour = 18;
        if(hour >= 6 && hour < 12) {
            console.log('good morning');
        } 
        else if (hour >=12 && hour < 18) {
            console.log('good after noon');
        } 
        else {
        console.log('goog evening');
        } 

        
///////// same solution like above one
    // let hour = 18;
    //     if(hour >= 6 && hour < 12) 
    //         console.log('good morning');        
    //     else if (hour >=12 && hour < 18) 
    //         console.log('good after noon');        
    //     else
    //     console.log('goog evening');
        