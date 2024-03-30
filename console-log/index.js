// STRING METHODS PRACTICE

// let userName = "BroCode";

// console.log(userName.charAt(0));
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));

// userName = "BroCode     ";

// console.log(userName.trim());

// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(3));

// console.log(userName.startsWith(" "));
// console.log(userName.startsWith("B"));

// console.log(userName.endsWith(" "));
// console.log(userName.endsWith("e"));

// console.log(userName.includes(" "));
// console.log(userName.includes(","));

// let phoneNumber = "123-456-78-90";
// console.log(phoneNumber.replaceAll("-", "/"));

// console.log(userName.padStart(15, "0"));
// console.log(userName.padEnd(15, "0"));

//STRING SLICING

// const fullName = "Bro Code";

// firstName = fullName.slice(0, fullName.indexOf(" "));

// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// const email = "broCode1@gmail.com";

// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(userName);
// console.log(extension);

// CHAIN METHOD
//VARIABLE SCOPE

// let x = 3;

// function function1() {
//   let x = 2;
//   console.log(x);
// }

// function1();
// console.log(x);

// SPREAD OPERATOR

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// let username = "Bro Code";
// let letters = [...username].join("-");

// console.log(maximum);
// console.log(minimum);
// console.log(letters);

// let fruits = ["apple", "orange"];
// let vegetables = ["celery", "carrot"];

// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods);

// REST PARAMETERS

function sum(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is ${total}`);

function average(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const averageNumbers = average(1, 2, 3, 4, 5);
console.log(`Your average is ${averageNumbers}`);

// -----------------------------------------------------

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

function combineStrings(...strings) {
  return strings.join(" ");
}

console.log(fullName);
