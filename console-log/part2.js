// Destructuring practice

// 1 - SWAP ELEMENT VALUES

let letter1 = "a";
let letter2 = "b";

console.log(letter1);
console.log(letter2);

[letter1, letter2] = [letter2, letter1];

console.log(letter1);
console.log(letter2);

// 2 - SWAP ELEMENTS IN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

console.log(colors);

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// 3 - ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
console.log(extraColors[0]);

// 4 -EXTRACT VALUES FROM OBJECTS

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

const { firstName, lastName, age, job = " asda" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// 5 - DESTRUCTURING IN FUNCTION PARAMETERRS

function displayPerson({ firstName, lastName, age, job }) {
  console.log(`name: ${firstName} ${lastName} `);
}
