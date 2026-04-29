//Higer Order Functions as well as Callback functions
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

function goodbye(){
    console.log("Goodbye");
}

greet("Debapriyo", goodbye);


setTimeout(function(){
    console.log("Print this after 2 seconds");
}, 2000)



let cnt = 1;
setInterval(function(){
    console.log(`count ${cnt}`)
    cnt++;

    if(cnt === 5){
        clearInterval(this);
    }
}, 1000)

