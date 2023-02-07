{
    const welcome = () => {
        console.log("Hello!")
    };
    welcome();

    const updateResultText = (result, currency) => {
        const exchangeElement = document.querySelector(".js-exchange");
        exchangeElement.value = `${result.toFixed(2)} ${currency}`
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency")
        const amountElement = document.querySelector(".js-amount")
        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result, currency);
    };


    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();

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
        };
    };
}