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

// function sum(...numbers) {
//   let result = 0;

//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// const total = sum(1, 2, 3, 4, 5);
// console.log(`Your total is ${total}`);

// function average(...numbers) {
//   let result = 0;

//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }

// const averageNumbers = average(1, 2, 3, 4, 5);
// console.log(`Your average is ${averageNumbers}`);

// // -----------------------------------------------------

// const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

// function combineStrings(...strings) {
//   return strings.join(" ");
// }

// console.log(fullName);

// forEach() PRACTICE

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }

// function display(element) {
//   console.log(element);
// }

// let fruits = ["apple", "banana", "orange", "coconut"];

// fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function display(element) {
//   console.log(element);
// }

//.map() method practice

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// // ================================

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);
// console.log(studentsUpper);
// console.log(studentsLower);

// function upperCase(element) {
//   return element.toUpperCase();
// }

// function lowerCase(element) {
//   return element.toLowerCase();
// }

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element) {
//   const parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

//----------

//filter() method practice

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const evenNumbers = numbers.filter(isEven);
// const oddNumbers = numbers.filter(isOdd);

// console.log(evenNumbers);
// console.log(oddNumbers);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

//reduce METHOD PRACTICE

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`${total.toFixed(2)}`);

// function sum(accumulator, element) {
//   return accumulator + element;
// }

// const grades = [75, 50, 90, 80, 65, 95];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);

// console.log(maximum);
// console.log(minimum);

// function getMax(accumulator, element) {
//   return Math.max(accumulator, element);
// }

// function getMin(accumulator, element) {
//   return Math.min(accumulator, element);
// }

// ARROW FUNCTIONS

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const oddNums = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(oddNums);
console.log(total);
