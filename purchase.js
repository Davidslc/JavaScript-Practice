const TAX_RATE = 0.08;
const PHONE_PRICE = 699.95;
const ACCESSORY_PRICE = 49.95;

function phonePurchase() {
    var phoneTotal = 0;
    var phoneToBuy = 0;
    var willingToSpend = prompt("What is your bank balance?") * 0.50;
    while (willingToSpend > phoneTotal) {
        phoneToBuy += 1;
        phoneTotal = (PHONE_PRICE + ACCESSORY_PRICE) * phoneToBuy;

    }

    var totalNumber = phoneToBuy - 1;
    var totalPurchase = phoneTotal - (PHONE_PRICE + ACCESSORY_PRICE);
    var totalWithTax = (totalPurchase * TAX_RATE) + totalPurchase;

    return "You can buy " + totalNumber + " phones with accessories for $" + totalWithTax.toFixed(2);
}

console.log(phonePurchase());
