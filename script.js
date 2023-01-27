let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount")
let currencyElement = document.querySelector(".js-currency")
let exchangeElement = document.querySelector(".js-exchange")

let GBP = 5.37;
let USD = 4.35;
let EUR = 4.71;
let AUD = 3.01;
let CAD = 3.23;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;

    switch (currency) {
        case "GBP":
            exchange = amount / GBP;
            break;
        case "USD":
            exchange = amount / USD;
            break;
        case "EUR":
            exchange = amount / EUR;
            break;
        case "AUD":
            exchange = amount / AUD;
            break;
        case "CAD":
            exchange = amount / CAD;
            break;
    }
    exchangeElement.value = `${exchange.toFixed(2)} ${currency}`;
});