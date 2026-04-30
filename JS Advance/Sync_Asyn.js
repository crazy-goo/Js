//
setTimeout(() =>{ 
    console.log("Open Book My Show!");
    
}, 3000);

setTimeout(() =>{ 
    console.log("Search for movies...");
    
}, 5000);

setTimeout(() =>{ 
    console.log("Select seats...");
    
}, 8000);

setTimeout(() =>{ 
    console.log("Make payment...");
    
}, 2000);

//the excution is totally happen aync way!
//how to make it sync way?
//1. Callbacks / Event Looping..
//2. Promises
//3. Async Await

//Callbacks

setTimeout(() => {
    console.log("Open Book My Show!");

    setTimeout(() => {
        console.log("Search for movies...");

        setTimeout(() => {
            console.log("Select seats...");

            setTimeout(() => {
                console.log("Make payment...");
            }, 2000);

        }, 8000);

    }, 5000);   

}, 9000);

