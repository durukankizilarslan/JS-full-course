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

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const oddNums = numbers.filter((element) => element % 2 === 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element);

// console.log(squares);
// console.log(cubes);
// console.log(oddNums);
// console.log(total);

//OBJECTS

// const person = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   isEmployed: true,
//   sayHello: function () {
//     console.log("Hi! I'm Spongebob!");
//   },
//   eat: () => console.log("I'm eating a crabby patty."),
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 42,
//   isEmployed: false,
//   sayHello: () => {
//     console.log("Hey, I'm Patrick...");
//   },
//   eat: () => {
//     console.log("I'm eating nothing.");
//   },
// };

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isEmployed);
// person.sayHello();
// person.eat();

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// person2.sayHello();
// person2.eat();

//PRACTICING THIS KEYWORD

// const person = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   favFood: "crabby patty",
//   age: 30,
//   isEmployed: true,
//   sayHello: function () {
//     console.log(`Hi! I'm ${this.firstName}!`);
//   },
//   eat: function () {
//     console.log(`I'm eating a ${this.favFood}.`);
//   },
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 42,
//   isEmployed: false,
//   sayHello: () => {
//     console.log("Hey, I'm Patrick...");
//   },
//   eat: () => {
//     console.log("I'm eating nothing.");
//   },
// };

// person.eat();
// console.log(this);

// CONSTRUCTOR PRACTICE

// function Car(make, model, year, color) {
//   (this.make = make),
//     (this.model = model),
//     (this.year = year),
//     (this.color = color),
//     (this.drive = function () {
//       console.log(`You drive a ${this.make} ${this.model}`);
//     });
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
// const car3 = new Car("Dodge", "Charger", 2026, "silver");

// car1.drive();
// car2.drive();
// car3.drive();

// CLASSES PRACTICE

// const salesTax = 0.05;

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: ${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.5);
// const product3 = new Product("Underwear", 100.0);

// product3.displayProduct();

// const total = product3.calculateTotal(salesTax).toFixed(2);

// console.log(`Total price of the underwear is ${total}`);

//PRACTICING STATIC KEYWORD

// class MathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }

//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// const mathUtil1 = new MathUtil();
// console.log(mathUtil1.PI);

// console.log(MathUtil.getCircumference(10));

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   static getUserCount() {
//     console.log(`There are ${this.userCount} users right now.`);
//   }

//   sayHello() {
//     console.log(`Hello my name is ${this.username}`);
//   }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");

// const user3 = new User("Sandy");

// console.log(user1.username);
// console.log(user1.userCount);

// user1.sayHello();
// user2.sayHello();
// console.log(User.userCount);
// User.getUserCount();

// PRACTICING INHERITANCE

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleepping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }

// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }

// class Hawk extends Animal {
//   name = "hawk";

//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// rabbit.alive = false;
// console.log(rabbit.alive);
// hawk.eat();
// rabbit.run();
// fish.swim();
// hawk.fly();

// ------------------------------

// Practicing super keyword

// class Animal {
//   alive = true;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`This ${this.name} moves at a speed of ${speed} mph`);
//   }

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleepping`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`This ${this.name} is running`);

//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`This ${this.name} is swimming`);

//     super.move(this.swimSpeed);
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`This ${this.name} is flying`);

//     super.move(this.flySpeed);
//   }
// }

// const animal1 = new Animal("some animal", 5);
// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// hawk.fly();
// console.log(rabbit.runSpeed);
// animal1.move(30);
// rabbit.move();

// rabbit.run();
// fish.swim();
// hawk.fly();

// ---------------------------------------------------------------

// Getters and Setters

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("Width must be a positive number");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Height must be a positive number");
//     }
//   }

//   get width() {
//     return `${this._width.toFixed(2)} cm`;
//   }

//   get height() {
//     return `${this._height.toFixed(1)} cm`;
//   }

//   get area() {
//     return `${(this._width * this._height).toFixed(1)} cm2`;
//   }
// }

// const rectangle = new Rectangle(2, 4);

// rectangle.width = 5;
// rectangle.height = 2;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// // ---------------------------------

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName) {
//     if (typeof newFirstName === "string" && newFirstName.length > 0) {
//       this._firstName = newFirstName;
//     } else {
//       console.error("First name must be an non-empty string");
//     }
//   }

//   set lastName(newLastName) {
//     if (typeof newLastName === "string" && newLastName.length > 0) {
//       this._lastName = newLastName;
//     } else {
//       console.error("Last name must be an non-empty string");
//     }
//   }

//   set age(newAge) {
//     if (typeof newAge === "number" && newAge > 0) {
//       this._age = newAge;
//     } else {
//       console.error("Age must be a positive number");
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }
//   get lastName() {
//     return this._lastName;
//   }

//   get fullName() {
//     return this._firstName + " " + this._lastName;
//   }

//   get age() {
//     return this._age;
//   }
// }

// const person = new Person("Spongebob", "Squarepants", 30);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName);
