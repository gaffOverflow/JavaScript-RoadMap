console.log("hello world");
console.log("gaffar ibrahim");

// variables
name = "gaffar ibrahim";
console.log(name);

sentence = "how are you doing today, i hope you have a great day";
console.log(sentence);

// operators

// prompt() is used to collect user information...
function CalculateFoodExpenxes() {
  fruit = prompt("what is your favorite fruit?");

  console.log(fruit);
  food = Number(prompt("how much is food? "));
  console.log(food);
  tipPercentage = Number(prompt("tip ?")) / 100;
  console.log(tipPercentage);
  tipAmount = food * tipPercentage;
  total = food + tipAmount;
  console.log("total amount", total);
  console.log("tipAmount", tipAmount);
  cost = food - tipAmount;
  console.log("cost of food", cost);

  // alert is like prompt(), but it is only for output...
  alert(tipAmount);
}

// user input

/*data types (strings, numbers)
numbers = 1, 3, 4, 6, 100...
strings = 'hello', "what's up"
arrays = []
objects = {}
boolean = true/false (banks)

maths operations
multiply *
divide /
exponents **
Modulo/Remainders %
add = +
subtract = -
*/

/*Maths Methods
Floor - Round Down
Ceil - Round Up
Random - Gives you a random number = Maths.random() * 3 = gives you number  between 0 & 3
*/

Math.random();

// let weather = prompt("what's is the weather like today?");
// if (weather == "rainy") {
//   console.log("get your umbrella");
// } else {
//   console.log("get your sun shade");
// }

/*
let redrawal = prompt("enter amount to redraw");
if (redrawal >= "2000") {
  console.log("insufficient balance");
} else {
  console.log("thanks for banking with us");
}
*/
// this is a function called SayMyName
// it is used to log strings
// it has no arguement
function SayMyName() {
  console.log("gaff");
  console.log("lukk");
  console.log("shaw");
  console.log("mendez");
}

function SayMyName2(name) {
  console.log(name);
}
// SayMyName2(prompt("what is your name?"));

function greeting(name) {
  greet = `hi ${name} it's nice to meet you!`;
  // tenplate literals=``
  console.log(greet);
}
greeting("zack");

// multiple arguement
function sum(a, b) {
  // return
  return a + b;
}
// sum(1,2) stored in variables of num1
num1 = sum(1, 2);
console.log(num1);

function CalculateFoodTip(food, tip) {
  const tipPercentage = tip / 100;

  const tipAmount = food * tipPercentage;
  const total = food + tipAmount;
  cost = food - tipAmount;
  console.log("total amount", total);
  console.log("tipAmount", tipAmount);

  console.log("cost of food", cost);
  return total;

  // alert is like prompt(), but it is only for output...
}
sumTotal = CalculateFoodTip(5000, 50);
console.log(sumTotal);
console.log(cost);

// ES6
// Arrow Function
// Arrow Function with explicit return
const sumArrrow = (a, b) => {
  return a + b;
};
console.log(sumArrrow);

// Arrow function with implicit return
// IMPORTANT! for implicit return remove curly braces
const sumArrrow2 = (a, b) => a + b;
console.log(sumArrrow2(10, 50));

/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/
function operations() {
  function add() {
    //Add function here
    const woman = Number(prompt("what is woman?"));
    console.log(woman);
    const man = 400;
    console.log(man);
    const total = man + woman;
    return total;
  }
  added = add();
  // console.log(added);

  function sub(a, b) {
    //Subtract function here
    total = a - b;
    return total;
  }
  subtract = sub(200, 300);
  console.log(subtract);

  function div(a, b) {
    //Divide function here
    return a / b;
  }
  console.log(div(300, 4));

  const mul = (a, b) => {
    //Multiply function here
    return a * b;
  };
  console.log(mul(9, 2));
  console.log("hello from the SUM exercise");
}
// operations();
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

// Arrays
const groceries = ["banana", "apple", "mango", "orange"];
console.log(groceries);
console.log(groceries[0]);

// grab the second index (index is position in arrays e.g index 0, to index 3, )
// the second index is apple
console.log(groceries[1]);

// array methods
groceries.push("coconut");
console.log(groceries);

// array slice
// start from 0 INCLUSIVE and UP to 2 [0, 1, 2, 3, 4, 5]
console.log(groceries.slice(0, 3));
console.log(groceries.slice(3, 5));

// array methods (var.push, var.slice, var.indexOf, var.length)
// indexOf logs the groceries index number
console.log(groceries.indexOf("coconut"));

// lenght logs the groceries length number
console.log(groceries.length);

// OBJECTS
const person = {
  name: "laru",
  color: "black",
};
console.log(person.name);
console.log(person.color);

//access object: dot notation vs. bracket notation
console.log(person["name"]);
console.log(person["color"]);

// assign object
person.phone = "081-511-06939";
console.log(person["phone"]);

console.log(person);
//
const person2 = {
  name: "quzi",
  shirt: "black",
};
console.log(person2["name"]);
console.log(person2.shirt);
person2.phone = "070888999";
console.log(person2);
//

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
  };
  const intro = `hello world, my name is ${person.name}, the color of my shirt is ${person.shirt}`;
  return intro;
};
console.log(introducer("laru", "black"));
//

// es6 arrow function (2 arguments) explicit function
// object
// template literals
// methods Maths.floor()
const car = (a, b) => {
  const type = {
    vehicle: a,
    color: b,
    asset: 10000,
    liability: 2000,
    networth: function () {
      return this.asset - this.liability;
    },
  };
  const details = `hi, i drive ${type.vehicle} it's nice on ${type.color}
  i bought it for ${type.networth()}`;
  return details;
};
console.log(car("toyota", "yellow"));
//

const bio = (height, race, gender) => {
  const person3 = {
    height: height,
    race: race,
    gender: gender,
    debit: 4000,
    credit: 10000,
    accountBalance: function () {
      return this.credit - this.debit;
    },
  };
  const introduction = `she's ${person3.height} in height and identify as a ${
    person3.gender
  }. She hails from the ${
    person3.race
  } community. she's worth $${person3.accountBalance()}`;
  return introduction;
};
console.log(bio("170cm", "black", "female"));
//

// loop

const fruits = [
  "banana",
  "apple",
  "mango",
  "orange",
  "banana",
  "apple",
  "mango",
  "orange",
  "banana",
  "apple",
  "mango",
  "orange",
  "banana",
  "apple",
  "mango",
  "orange",
  "banana",
  "apple",
  "mango",
  "orange",
];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

for (const fruit of fruits) {
  console.log(fruit);
}

//

// const number = [1, 2, 3, 4, 5, 6];
// let result = [];
// for (const list of number) {
//   // console.log(list * 2);
//   result.push(list * 2);
//   console.log(result);
// }
// for (let i = 0; i < number.length; i++) {
//   console.log(i, number[i]);
// }

// function

const double = (numbers) => {
  let result = [];
  for (number of numbers) {
    result.push(number ** 2);
  }
  return result;
};
console.log(double([1, 2, 3, 4, 5, 6, 7]));

let intro;
intro =
  "my name is ayo, i am a student. i study biology in brain point. i am so unserious with my programming class";
console.log(intro);

 