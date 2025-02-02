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

// Task 3 While Loop

let stock = 10; // Setting a value for initial stock amount

while (stock > 0) {
    console.log(`Stocks Remaining: ${stock}`); // Log the decrease of stock each time
    stock--; // Reduce Stock by 1 
}

console.log("No Stocks Left.") // Display message when stocks are at 0

// Task 4 Do... While Loop

let response = 0; // Start initial repsonse count at 0

do {
    console.log(`Response Amount: ${response}`); // Log response amount to console
    response++; // Add a response to the response amount
} while(response <= 3); // Stop adding responses when 3 responses are reached

// Task 5 For... In Loop

let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
}; // Declared an employee object

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}; // Made loop that goes through employee object properties

// Task 6 For... Of Loop

let products = ["Laptop", "Mouse", "Keyboard"]; // Made a list of Products

for (let product of products) {
    console.log(`Product: ${product}`); // Log each product into console
}

// Task 7 forEach() Method

let orders = [101, 102, 103]; // Created an array for orders Ids

orders.forEach(order => {
    console.log(`Order ID: ${order}`)
}); // Log Each Order ID in console