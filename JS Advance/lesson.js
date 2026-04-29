//Explain High Order Function
//A higher-order function is a function that takes another function as an argument or returns a function as its result. Higher-order functions are a fundamental concept in functional programming and are used to create more flexible and reusable code.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUser(name, callback) {
    callback(name);
}

processUser("Debu", greet)

//another example..
function multiply(multiplier) {
    return function (num){
        return multiplier * num;
    }
}

const double = multiply(2);
console.log(double(5)); 

const triple = multiply(3);
console.log(triple(5)); 


// "MAP FUNCTION"
const num = [1, 2, 3, 4, 5];
const sqr = num.map(x => x * x);
console.log("Squre Root are :");
console.log(sqr);


// "FILTER FUNCTION"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log("The Even Numbers are :");
console.log(evenNumbers); 

// "REDUCE FUNCTION"
const products = [
    {
        name: "Laptop",
        price: 1000
    },
    {
        name: "Phone",
        price: 500
    }
];
const totalValue = products.reduce((accumulator, product) => accumulator + product.price, 0);
console.log("The Total Value of Products is : " + totalValue);

// "FOREACH FUNCTION"
const fruits = ["Apple", "Banana", "Cherry"];
console.log("The Fruits are :");
fruits.forEach(fruit => console.log(fruit));

// "ALL THE CONCEPT IN ONE EXAMPLE"

const cart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Tablet", price: 300, quantity: 3 }
]

//Apply 10% discount to each product
const discountedCart = cart.map(product => product.price * 0.9);
console.log("Discounted Prices : " + discountedCart);

//Filter products with price greater than 400
const expensiveProducts = cart.filter(product => product.price > 400);
console.log("Expensive Products : " + expensiveProducts.map(product => product.name));


//Calculate total value of the cart
const totalCartValue = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
console.log("Total Cart Value : $" + totalCartValue);
