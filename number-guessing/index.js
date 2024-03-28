// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
let attempts = 0;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let running = true;

while (running) {
  guess = window.prompt(`Enter a number between ${minNum} and ${maxNum} :`);
  guess = Number(guess);

  if (isNaN(guess)) {
    console.log("Guess is not a number");
  } else if (guess < minNum || guess > maxNum) {
    console.log("Your guess is not between the minimum and maximum numbers.");
    window.alert("Please enter a number again:");
  } else {
    attempts++;

    if (guess < answer) {
      window.alert(" TOO LOW. TRY AGAIN!");
    } else if (guess > answer) {
      window.alert(" TOO HIGH. TRY AGAIN!");
    } else {
      window.alert(`CONGRATULATIONS! YOU GUESSED AT ${attempts} ATTEMPTS.`);
      running = false;
    }
  }
}
