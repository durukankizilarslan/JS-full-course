// // Destructuring practice

// // 1 - SWAP ELEMENT VALUES

// let letter1 = "a";
// let letter2 = "b";

// console.log(letter1);
// console.log(letter2);

// [letter1, letter2] = [letter2, letter1];

// console.log(letter1);
// console.log(letter2);

// // 2 - SWAP ELEMENTS IN ARRAY

// const colors = ["red", "green", "blue", "black", "white"];

// console.log(colors);

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// // 3 - ASSIGN ARRAY ELEMENTS TO VARIABLES

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);
// console.log(extraColors[0]);

// // 4 -EXTRACT VALUES FROM OBJECTS

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job: "Fry Cook",
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34,
// };

// const { firstName, lastName, age, job = " asda" } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// // 5 - DESTRUCTURING IN FUNCTION PARAMETERRS

// function displayPerson({ firstName, lastName, age, job }) {
//   console.log(`name: ${firstName} ${lastName} `);
// }

// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int. Water",
//   },
// };

// for (const property in person.address) {
//   console.log(person.address[property]);
// }

// console.log(person);
// console.log(person.fullName);
// console.log(person.hobbies);
// console.log(person.hobbies[2]);

//NESTED OBJECTS

// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }

// const person1 = new Person(
//   "Spongebob",
//   30,
//   "124 Conch St",
//   "Bikini Bottom",
//   "Int. Waters"
// );

// const person2 = new Person(
//   "Patrick",
//   37,
//   "128 Conch St",
//   "Bikini Bottom",
//   "Int. Waters"
// );

// const person3 = new Person(
//   "Squidward",
//   45,
//   "126 Conch St",
//   "Bikini Bottom",
//   "Int. Waters"
// );

// console.log(person1.address.country);
// console.log(person2.address.city);
// console.log(person3.address.street);
// console.log(person2.age);

//

// ARRAY OF OBJECTS

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
];

fruits.push({
  name: "grapes",
  color: "purple",
  calories: 95,
});

console.log(fruits.slice(-1));
console.log(fruits.pop(-1));
console.log(fruits);

//-------------- map()

const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);

const fruitCalories = fruits.map((fruit) => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

//-------------- filter()

const fruitNamesFilter = fruits.filter((fruit) => fruit.name === "banana");
const fruitsLowCal = fruits.filter((fruit) => fruit.calories < 100);
const fruitsHighCal = fruits.filter((fruit) => fruit.calories >= 100);

console.log(fruitNamesFilter);
console.log(fruitsLowCal);
console.log(fruitsHighCal);

//-------------- reduce()

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);

const minFruit = fruits.reduce((min, fruit) =>
  min.calories < fruit.calories ? min : fruit
);

console.log(maxFruit);
console.log(minFruit);
