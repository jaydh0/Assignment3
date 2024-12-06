document.addEventListener("DOMContentLoaded", function() {

    
    const processTaxCalculation = () => {
        const incomeField = document.getElementById("taxable-amount");
        const errorMessage = document.getElementById("amount-error");
        const income = parseInt(incomeField.value.trim(), 10);

        errorMessage.textContent = ""; 

        if (isNaN(income) || income <= 0) {
            errorMessage.textContent = "Please enter a valid income greater than 0.";
            incomeField.focus();
        } else {
            const tax = calculateTaxAmount(income);
            document.getElementById("tax-output").value = tax.toFixed(2);
        }
    };

    
    const calculateTaxAmount = (income) => {
        let taxDue = 0;

        if (income <= 9875) {
            taxDue = income * 0.10;
        } else if (income <= 40125) {
            taxDue = 987.50 + (income - 9875) * 0.12;
        } else if (income <= 85525) {
            taxDue = 4617.50 + (income - 40125) * 0.22;
        } else if (income <= 163300) {
            taxDue = 14605.50 + (income - 85525) * 0.24;
        } else if (income <= 207350) {
            taxDue = 33271.50 + (income - 163300) * 0.32;
        } else if (income <= 518400) {
            taxDue = 47367.50 + (income - 207350) * 0.35;
        } else {
            taxDue = 156235.00 + (income - 518400) * 0.37;
        }

        return taxDue;
    };

 
    document.getElementById("compute-btn").addEventListener("click", processTaxCalculation);
});