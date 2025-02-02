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