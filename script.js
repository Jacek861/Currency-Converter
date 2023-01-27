{
    const welcome = () => {
        console.log("Hello!")
    }
    welcome()


    const init = () => {
        const formElement = document.querySelector(".js-form")
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const currencyElement = document.querySelector(".js-currency")
            const exchangeElement = document.querySelector(".js-exchange")
            const amountElement = document.querySelector(".js-amount")

            const amount = amountElement.value;
            const currency = currencyElement.value;

            const result = calculateResult(amount, currency)

            exchangeElement.value = `${result.toFixed(2)} ${currency}`;
        });
    }
    init()

    const calculateResult = (amount, currency) => {
        const GBP = 5.37;
        const USD = 4.35;
        const EUR = 4.71;
        const AUD = 3.01;
        const CAD = 3.23;

        switch (currency) {
            case "GBP":
                return amount / GBP;

            case "USD":
                return amount / USD;

            case "EUR":
                return amount / EUR;

            case "AUD":
                return amount / AUD;

            case "CAD":
                return amount / CAD;
        }
    }
}