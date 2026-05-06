getName()
console.log(getName);
console.log(x);
var x = 7;

function getName2() { //this will be function it's self if call
    console.log("Hi @debu this side!");
}

//if i make an arrow function..
//then JS Engine works as variable..

var getName = () => {
    console.log("Hi @debu this side!");
}


