
const billingToggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

billingToggle.addEventListener("change", function () {

    prices.forEach(function(price) {

        const monthlyPrice = price.dataset.month;
        const yearlyPrice = price.dataset.year;

        if (billingToggle.checked) {
            price.innerHTML = `$${yearlyPrice} <span>/month, billed yearly</span>`;
        } else {
            price.innerHTML = `$${monthlyPrice} <span>/month</span>`;
        }

    });

});
