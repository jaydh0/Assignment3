document.addEventListener("DOMContentLoaded", function () {
document.getElementById("calculate").addEventListener("click", calculateTotal);
document.getElementById("clear_form").addEventListener("click", resetForm);

function calculateTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let taxRate = parseFloat(document.getElementById("tax_rate").value);

    let subtotalError = document.getElementById("subtotal_error");
    let taxRateError = document.getElementById("tax_rate_error");
    subtotalError.textContent = "";
    taxRateError.textContent = "";

    subtotalError.style.visibility = "hidden";
    taxRateError.style.visibility = "hidden";

    let isValid = true;

    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 9999) {
        subtotalError.textContent = "Subtotal must be greater than 0 and less than 9,999.";
        subtotalError.style.visibility = "visible"; 
        isValid = false;
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        taxRateError.textContent = "Tax rate must be greater than 0 and less than 12.";
        taxRateError.style.visibility = "visible";
        isValid = false;
    }

    if (isValid) {
        let salesTax = (subtotal * taxRate) / 100;
        let total = subtotal + salesTax;

        document.getElementById("sales_tax").value = salesTax.toFixed(2);
        document.getElementById("total").value = total.toFixed(2);
    }
}

function resetForm() {
    document.getElementById("taxform").reset();
    document.getElementById("subtotal_error").textContent = ""; 
    document.getElementById("tax_rate_error").textContent = ""; 
    document.getElementById("subtotal_error").style.visibility = "hidden";
    document.getElementById("tax_rate_error").style.visibility = "hidden";
    document.getElementById("subtotal").focus(); 
}

document.getElementById("subtotal").focus();
});
