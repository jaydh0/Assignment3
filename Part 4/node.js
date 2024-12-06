document.addEventListener("DOMContentLoaded", () => {
    const validateInputs = () => {
        const dateValue = document.getElementById("checkinDate").value.trim();
        const nightsValue = document.getElementById("numberNights").value.trim();
        const emailValue = document.getElementById("userEmail").value.trim();
        const nameValue = document.getElementById("fullName").value.trim();

        let isInvalid = false;

        if (!dateValue) {
            document.getElementById("errorDate").textContent = "This field is required.";
            isInvalid = true;
        } else {
            document.getElementById("errorDate").textContent = "";
        }

        if (!nightsValue || isNaN(nightsValue)) {
            document.getElementById("errorNights").textContent = "Please enter a valid number.";
            isInvalid = true;
        } else {
            document.getElementById("errorNights").textContent = "";
        }

        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            document.getElementById("errorEmail").textContent = "Please provide a valid email.";
            isInvalid = true;
        } else {
            document.getElementById("errorEmail").textContent = "";
        }

        if (!nameValue) {
            document.getElementById("errorName").textContent = "Name is required.";
            isInvalid = true;
        } else {
            document.getElementById("errorName").textContent = "";
        }

        if (isInvalid) {
            alert("Please fill out all required fields before submitting. ;)");
        } else {
            alert("Your booking has been submitted");
        }
    };

    document.getElementById("submitBtn").addEventListener("click", validateInputs);
});