// Task 1 If Statements

let purchaseAmount = 350; // Set a purchase amount
let finalAmount = purchaseAmount;

if(purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; 
} // Setting a 10% discount if purchase amount is over 100
console.log(`Final amount after discount: $${finalAmount}`); // Logging purchase amount after discount in console

// Task 2 For Loop

let sales = [120, 85, 200, 150, 90]; // Created an array for sales figures 
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]; // Adding up the sales to calculate Total Sales
}

console.log(`Total Sales: $${totalSales}`); // Logging Total Sales amount to console

