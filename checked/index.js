// CHECKED

const myCheckbox = document.getElementById("my-checkbox");
const visaBtn = document.getElementById("btn-visa");
const paypalBtn = document.getElementById("btn-paypal");
const mastercardBtn = document.getElementById("btn-mastercard");
const mySubmit = document.getElementById("my-submit");

const resultSub = document.getElementById("result-sub");
const resultPayment = document.getElementById("result-payment");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    resultSub.textContent = "You're subscribed!";
  } else {
    resultSub.textContent = "You're NOT subscribed!";
  }

  if (visaBtn.checked) {
    resultPayment.textContent = "You're paying with Visa.";
  } else if (mastercardBtn.checked) {
    resultPayment.textContent = "You're paying with Mastercard.";
  } else if (paypalBtn.checked) {
    resultPayment.textContent = "You're paying with PayPal.";
  } else {
    resultPayment.textContent = "You must select a payment type.";
  }
};
