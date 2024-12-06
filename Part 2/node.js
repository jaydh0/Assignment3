document.addEventListener("DOMContentLoaded", () => {
    const computeChange = () => {
        const amountInput = document.getElementById("input-amount");
        const errorMsg = document.getElementById("errormsg");
        const amount = parseInt(amountInput.value.trim(), 10);

        errorMsg.textContent = "";

        if (isNaN(amount) || amount < 0 || amount > 99) {
            errorMsg.textContent = "Please enter a change value between 0-99";
        } else {
            calculateChange(amount);
        }
    };

    const calculateChange = (amount) => {
        const quarters = Math.floor(amount / 25);
        amount %= 25;

        const dimes = Math.floor(amount / 10);
        amount %= 10;

        const nickels = Math.floor(amount / 5);
        const pennies = amount % 5;

        document.getElementById("quarts").value = quarters;
        document.getElementById("dimes").value = dimes;
        document.getElementById("nickels").value = nickels;
        document.getElementById("pennies").value = pennies;
    };

    const clearForm = () => {
        document.getElementById("input-amount").value = "";
        document.getElementById("errormsg").textContent = "";
        document.getElementById("quarts").value = "";
        document.getElementById("dimes").value = "";
        document.getElementById("nickels").value = "";
        document.getElementById("pennies").value = "";
    };

    document.getElementById("compute-change").addEventListener("click", computeChange);
    document.getElementById("clear").addEventListener("click", clearForm);
});
