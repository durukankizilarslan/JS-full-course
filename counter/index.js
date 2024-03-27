// COUNTER PROGRAM
const decreaseBtn = document.getElementById("btn-decrease");
const resetBtn = document.getElementById("btn-reset");
const increaseBtn = document.getElementById("btn-increase");
const countLabel = document.getElementById("label-count");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
