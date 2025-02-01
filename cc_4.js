// Task 1 - If Statements
let purchaseAmount = 500; // Purchase amount.
let finalAmount = purchaseAmount; // Final amount for discount.
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.85; // 15% discount.
    console.log("Discount applied")
};
console.log(`Final amount after discount: $${finalAmount}`); // Logging final amount to console.