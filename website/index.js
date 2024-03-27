//type conversion

let age = window.prompt("How old are you?");
age += 1;
console.log(age);
console.log("Age is a " + typeof age + " type.");
console.log("---------------------");

let ageNumber = window.prompt("How old are you?");
ageNumber = Number(ageNumber);
ageNumber += 1;
console.log(ageNumber);
console.log("AgeNumber is a " + typeof ageNumber + " type.");

console.log("---------------------");

let x = "pizza";
x = Number(x);
console.log(x, typeof x);

//Ternary Operator practice

// let ageTernary = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message);

// let time = 9;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

// let isStudent = true;
// let student = isStudent ? "You're a student" : "You're NOT a student";
// console.log(student);

//SWITCH STATEMENT PRACTICE

// let day = "pizza";

// switch (day) {
//   case 1:
//     console.log("It's Monday");
//     break;
//   case 2:
//     console.log("It's Tuesday");
//     break;
//   case 3:
//     console.log("It's Wednesday");
//     break;
//   case 4:
//     console.log("It's Thursday");
//     break;
//   case 5:
//     console.log("It's Friday");
//     break;
//   case 6:
//     console.log("It's Saturday");
//     break;
//   case 7:
//     console.log("It's Sunday");
//     break;

//   default:
//     console.log(`${day} is not a day`);
// }
