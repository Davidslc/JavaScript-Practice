var bankBalance = prompt("What is your bank balance?");
var amount = 0;
var phoneCount = 0;
var accessoryCount = 0;

const TAX_RATE = 0.08;
const PHONE_PRICE = 99.95;
const ACCESSORY_PRICE = 9.95;
const SPENDING_THRESHOLD = bankBalance * 0.75;



function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

// Buy phones while you have the money in your bank account
while (amount < SPENDING_THRESHOLD) {
    amount += PHONE_PRICE;
    phoneCount += 1;
    // Is the amount over the spending threshold?
    if (amount < SPENDING_THRESHOLD) {
        amount += ACCESSORY_PRICE;
        accessoryCount += 1;
    }

}


// Add tax
amount += calculateTax(amount);

console.log("Your purchase: " + formatAmount(amount) + "\nNumber of phones: " + phoneCount + "\nNumber of accessories: " + accessoryCount);

// It there enough in you bank account?
if (amount > bankBalance) {
    console.log("You can't afford this purchase.")
}

