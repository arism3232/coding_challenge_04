// Task 1 - If Statements
let purchaseAmount = 500; // Declaring variable with value.
let finalAmount = purchaseAmount; // Final amount for discount.
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.85; // 15% discount.
    console.log("Discount applied")
};
console.log(`Final amount after discount: $${finalAmount}`); // Logging final amount to console.

// Task 2 - For Loop
let sales = [120, 85, 200, 150, 90]; // Declaring an array with five sales figures.
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
}; // Using for loop to calculate total sales.
console.log(`Total Sales: $${totalSales}`); // Logging total sales to console.

// Task 3 - While Loop
let stock = 10; // Declaring variable with initial value.
while (stock > 0) {
    console.log(`Remaining stock: ${stock}`);
    stock--; // Decrementing by 1. 
}; // Using while loop to decrease stock.
console.log("Depleted stock"); // Logging each decrement to console. 

// Task 4 - Do...While Loop
let responses = 0; // Declaring variable with initial value. 
do {
    console.log(`Responses collected: ${responses}`);
    responses++;
} while (responses < 3); // Logging response count to console.

// Task 5 - For...In Loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
}; // Declaring object with properties. 
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}; // Logging each property and value to console. 

// Task 6 - For...Of Loop
let products = ["Laptop", "Mouse", "Keyboard"]; // Declaring array with three products. 
for (let product of products) {
    console.log(`Product: ${product}`);
}; // Logging each product name to console. 

// Task 7 - forEach() Method
let orders = [101, 102, 103]; // Declaring array with three orders.
orders.forEach(order => {
    console.log(`order ID: ${order}`)
}); // Logging order ID to console. 

// Task 8 - Function Declaration
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}; // Writing function for amount and tax rate.
let tax = calculateTax(800, 0.07); // Calculating returned tax.
console.log(`Tax: $${tax}`); // Logging result to console. 

// Task 9 - Function Expressions
const applyDiscount = function(price, discountPercentage) {
    return price - (price * (discountPercentage / 100)); 
}; // Declaring function expression that takes price and discount percentage.
let discountedPrice = applyDiscount(500, 15); // Returning discounted price.
console.log(`Discounted price: $${discountedPrice}`); // Logging result to console.

// Task 10 - Arrow Functions
const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10);
}; // Writing arrow function that takes purchase amount and returns points earned. 
let points = calculatePoints(500);
console.log(`Loyalty Points: ${points}`); // Logging result to console. 