// intro to javaScript
function intro() {
  console.log("hello world ");
  console.log("i like pizza, it's really good");
  window.alert("I REALLY LOVE PIZZA");

  // this is c comment

  /*
  this is a 
  multi line
  comment
  */
}
// intro()

// VARIABLES
const variables = () => {
  // A variable is a container for strings data
  // A variables behaves as if it was the value that it contains
  // Two steps;
  // 1. declaration (Var, let, const)
  // 2. assigment (= assigment)

  let firstName = "Laru"; //strings
  let student = false; //booleans
  let age = 21; //number
  age = age + Number("1"); // Reverse '1' to number from string
  age = age + "1"; // .1 is treated as string with because it's quoted ""

  // NOTE:
  // String data type needs ("strings") to function
  // with a number data type
  // Number data type don't need ("strings") to function
  // Booleans data type are(true/false) they as well don't need ("string") to function

  console.log("!hello", firstName);
  console.log("You are", age, "years old");
  console.log("Enrolled", student);
  document.getElementById("p1").innerHTML = "!Hello " + firstName;
  document.getElementById("p2").innerHTML = "!You are " + age + " years old";
  document.getElementById("p3").innerHTML = "!Enrolled: " + student;
};
// variables();

// ARITHMETIC EXPRESSION
const arithmeticExpression = () => {
  // Arithmetic expression is a combination of
  // operands (values, variables, etc)
  // operators (+ - * / %)
  // that can be evaluated to a value
  // ex. y = x + 5;

  let students = 20;
  students = students + 1;
  students = students - 1;
  students = students * 2;
  students = students / 2;
  students = students ** 2;
  let extraStudents = students % 3;

  console.log(students);
  console.log(extraStudents);

  // Shortcut to arithmetic expression
  let pupils = 30;
  pupils += 1;
  pupils -= 1;
  pupils *= 2;
  pupils /= 2;
  pupils **= 2;
  let extraPupils = (pupils %= 7);

  console.log(pupils);
  console.log(extraPupils);

  /*
    operators precedence (BODMAS)
    1. parenthesis
    2. exponents
    3. multiplication
    4. addition & subtraction
  */

  let result = 1 + 2 * (3 + 4);
  let amount = (1 + 2) * (3 + 4); //reoslve 1+2 first

  console.log(result);
  console.log(amount);
};
// arithmeticExpression();

// USER INPUT
const userInput = () => {
  //  how to accept user input
  // Easy way with a window prompt
  /*
      let username = window.prompt('what is your name?')  
      console.log(username)
  */

  // DIFFICULT WAY... with HTML textbook

  let username;
  document.getElementById("button").onclick = function () {
    username = document.getElementById("username").value;
    console.log(username);
    document.getElementById("label").innerHTML = "!Hello " + username;
  };
};
userInput();

// TYPE CONVERSION
const typeConversion = () => {
  // type coversion = change the data type of a value to another (string, number, booleans)
  let name = window.prompt("Whats your name?");
  let age = window.prompt("How old are you?");
  // user input are always enter as STRING
  // to conver =
  age = Number(age);
  // else age is going to be string(355)
  age += 5;

  console.log("!Happy Birthday", name, " your are ", age, " years old");
  console.log(name, age);

  // TYPE CHANGE

  let x;
  let y;
  let z;
  let xy;

  x = Number("3.14");
  y = String(3.14);
  z = Boolean(); //Empty boolean is false
  xy = Boolean(3.14);

  console.log(x, typeof x);
  console.log(y, typeof y);
  console.log(z, typeof z);
  console.log(xy, typeof xy);
};
// typeConversion();

// CONST
const constant = () => {
  // const = a variable that can't be changed
  // let pi = 3.14159; Allows changes to be make to variables later
  const pi = 3.14159; // variable remain constant
  let radius; // used let because we want to change our variable later.
  let circumference;

  radius = window.prompt("enter the radius of a circle");
  radius = Number(radius);

  // pi = 420.69; Attenpt to change variable (syntax error)

  circumference = 2 * pi * radius;
  console.log(circumference);
};
// constant();

// MATHS METHOD
const mathematics = () => {
  let x = 3.99;
  let y = 6;
  let z = 6.001;
  // x = Math.round(x);
  // x=Math.floor(x) Round Down
  // x=Math.ceil(x) Round Up
  // x = Math.pow(x, 2); Raise to Power
  // x = Math.sqrt(x); Square Root
  // x = Math.abs(x); Distance to Zero
  // x = Math.max(x, y, z); To declare maximum set
  // x = Math.min(x, y, z); To declare minimum set
  x = Math.PI;

  console.log(x);
};
// mathematics();

// HYPOTENUS CALC

const hypotenuseCalc = () => {
  // find the Hypotenus of Right Angle Triangle
  // FORMULAR; C = Sqrt (A**2 + B**2)
  let a;
  let b;
  let c;

  // Calculation
  /*
      a = Number(window.prompt("Enter side A"));
      b = Number(window.prompt("Enter side B"));
      c = Math.pow(a, 2) + Math.pow(b, 2);
      c = Math.sqrt(c);

      console.log("Side C", c);
  */

  // TEXT DOCUMENT
  // Wrapping all command in BUTTON
  // Extract user info with DOM prompt instead of (window.prompt())
  document.getElementById("btn").onclick = function () {
    a = Number(document.getElementById("textBoxA").value);
    b = Number(document.getElementById("textBoxB").value);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2), c);
    c = document.getElementById("textBoxC").innerHTML = "Side C:" + c;
  };
};
hypotenuseCalc();

// COUNTER

const counter = () => {
  let count;
  count = 0;
  document.getElementById("decrease").onclick = function () {
    count -= 1;
    count = document.getElementById("count").innerHTML = count;
  };
  document.getElementById("reset").onclick = function () {
    count = 0;
    count = document.getElementById("count").innerHTML = count;
  };
  document.getElementById("increase").onclick = function () {
    count += 1;
    count = document.getElementById("count").innerHTML = count;
  };
};
counter();

// RANDOM

const random = () => {
  let x;
  let y;
  let z;

  /*
      x = Math.floor(Math.random() * 7) + 10;
      y = Math.floor(Math.random() * 7);
      z = Math.floor(Math.random() * 7);
*/

  // console.log(x);
  // console.log(y);
  // console.log(z);

  // USING DOM

  document.getElementById("roll").onclick = function () {
    x = Math.floor(Math.random() * 7) + 10;
    y = Math.floor(Math.random() * 7);
    z = Math.floor(Math.random() * 7);

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
  };
};
random();

// STRING SLICING

const stringMethod = () => {
  let username = "bro code";
  console.log(username.length); // to declare the lenght of a string
  console.log(username.charAt("2")); //to declare character at index of ('number')
  console.log(username.indexOf("o")); //to declare the index of a given character
  console.log(username.lastIndexOf("o")); //to declare the index of a given character(last of type)
  console.log(username.trim()); //to erase space
  console.log(username.toLowerCase());
  console.log(username.toUpperCase());
  console.log(username.replace("o", "i")); //replace selected character
  console.log(username.replaceAll("o", "i")); //replace type of all selected character
};
stringMethod();

// METHOD CHAINING

const methodChaining = () => {
  // can follow one method call with another
  let name = "  bro code";
  let letter;
  letter = name.toUpperCase().trim();
  console.log(letter);
};
methodChaining();

// IF STATEMENT

const IfStatement = () => {
  /* 
    if statement is the basis of decision making.
    if a statement/condition is true, then do nsomething
    If not, then don't do it

    the order of if statement does matter
    state you want to check first most come first.

    else if can be used multiple times but must end with else.
*/

  let age = 3;
  if (age >= 18) {
    console.log("You are an adult");
  } else if (age < 0) {
    console.log("You're not born yet");
  } else if (age < 16) {
    console.log("You have not experience puberty");
  } else {
    console.log("you are not matured yet");
  }

  // BOOLEANS

  let online = false;
  if (online) {
    console.log("You're online!");
  } else {
    console.log("You're offline!");
  }
};
IfStatement();

// CHECKED PROPERTIES

const CheckBox = () => {
  document.getElementById("myBttn").onclick = function () {
    // for readability, store element inside a VARIABLE

    const checkbox = document.getElementById("myCheckbox");
    const atm = document.getElementById("ATM");
    const paypal = document.getElementById("Paypal");
    const Transfer = document.getElementById("Transfer");

    if (checkbox.checked) {
      console.log("You've Subscribed!");
    } else {
      console.log("Please Subcribe to continue!");
    }
    if (atm.checked) {
      console.log("You're paying with ATM!");
    } else if (paypal.checked) {
      console.log("You're paying with Paypal!");
    } else if (Transfer.checked) {
      console.log("You're paying with Bank Transfer!");
    } else {
      console.log("Please select a payment option");
    }
  };
};
CheckBox();

// SWITCH

const Switch = () => {
  /*
  switch =  statement that examines a value 
            for a match against many case clausee.
            more efficient than "If statement"
  */

  let grade = "59";
  switch (true) {
    case grade >= 90:
      console.log("You perform excellent");
      break;
    case grade >= 80:
      console.log("You did great");
      break;
    case grade >= 70:
      console.log("You did good");
      break;
    case grade >= 60:
      console.log("You passed");
      break;
    case grade >= 50:
      console.log("You passed barely");
      break;
    case grade <= 49:
      console.log("You Failed");
      break;

    default:
      console.log("No Result");
  }
};
Switch();

// OPERATORS

const operators = () => {
  // = assignment operator
  // == comparison operator
  // === strict equality operator (compares dataType {string, number, boolean})

  let x = "3.14";
  if (x === 3.14) {
    console.log("x is pi");
  } else {
    console.log("x is not pi");
  }
};
operators();

// && AND / || OR LOGICAL OPERATION

const AndOr = () => {
  /*
      gives us the ability to checkm more than one condition concurrently
      && AND (BOTH conditions must be true)
      || OR (EITHER condition can be true)
  */

  let temperature = 30;
  let sunny = true;
  if ((temperature > 0 && temperature < 30) || sunny) {
    console.log("the weather is good");
  } else {
    console.log("the weather is bad");
  }
};
AndOr();

// NOT LOGICAL OPERATOR

const NOT = () => {
  /*
    NOT logical operator
    typically used to reverse a condition, booleans
    true -> false, False-> true
  */

  let weather = 15;
  let sunny = true;
  if (weather > 0) {
    console.log("It's warm outside");
  } else {
    console.log("It's cold outside");
  }
  if (!sunny) {
    console.log("wear your shade");
  } else {
    console.log("it might rain, go out with your umbrella");
  }
};
NOT();

//WHILE LOOP

const whileLoop = () => {
  //while loop =  repeat some code
  //              while some codition are true
  //              potentially infinite

  let userName = "";
  while (userName == "" || userName == null) {
    userName = window.prompt("enter your username");
  }
  console.log(userName);
};
//whileLoop();

//DO WHILE LOOP

const DowhileLoop = () => {
  //Do while loop =  is a variant of while loop
  //                 that runs a programme
  //                 before checking the condition

  let userName;
  do {
    userName = window.prompt("please enter your username");
  } while (userName == "" || userName == null);
  console.log(userName);
};
//DowhileLoop();

//FOR LOOP

const ForLoop = () => {
  // For Loop = repeat some code a certain
  //            amount of times

  for (let i = 1; i <= 10; i += 1) {
    console.log(i);
  }
  console.log("!HAPPY BIRTHDAY");
};
ForLoop();

// BREAK AND CONTINUE STATEMENT

const BreakContinue = () => {
  // Break = break out of a loop entirely
  // continue = skip and iteration of a loop

  for (let i = 1; i <= 20; i += 1) {
    console.log(i);
    if (i == 13) {
      break;
    }
  }
};
BreakContinue();

// NESTED LOOP

const NestedLoop = () => {
  // nested loop = a loop inside another loop

  /*
      for (let i = 4; i >= 1; i -= 1) {
      for (let k = i; k >= 1; k -= 1) console.log(k)};
  */

  let symbol = window.prompt("enter you sign");
  let row = window.prompt("Enter number of row");
  let column = window.prompt("Enter number of column");

  for (let i = 1; i <= row; i += 1) {
    for (let j = 1; j <= column; j += 1) {
      document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
  }
};
/*  NestedLoop() */

//  FUNCTION

const FUNCTION = () => {
  // function =   defines code once, and used it
  //              multiple times.
  //              to perform same code, call the
  //              function name.

  startprogramme();

  function startprogramme() {
    let username = "bro";
    let age = 23;

    HappyBirthday(username, age);
  }

  function HappyBirthday(a, b) {
    console.log("happy birthday to you!");
    console.log("happy birthday to you!");
    console.log("happy birthday dear !", a);
    console.log("how old are you now?");
    console.log("you are", b, "years old now");
  }
};

/*  FUNCTION()  */

//  RETURN
const REturn = () => {
  // let a = Number(window.prompt("A?"));
  // let c = Number(window.prompt("B?"));

  let a;
  let c;
  // let result;

  const Dimention = (a, c) => {
    return 100 + 300;
  };
  result = Dimention(a, c);
  console.log(result);
};
REturn();

// TERNARY OPERATOR

const Ternary = () => {
  // ternary operation =  Shortcut for an
  //                      'If/Else statement'
  //                      Takes operands

  //                      1. a condition with ?
  //                      2. expression if True :
  //                      3. expression if False :

  let Adult = checkAge(21);
  function checkAge(Adult) {
    if (Adult >= 21) {
      console.log("you are an Adult");
    } else {
      console.log("you are not an Adult");
    }
  }

  let wealthy = checkStatus(10);
  function checkStatus(wealthy) {
    return wealthy >= 10 ? true : false;
  }
  console.log(wealthy);

  //  EXAMPLE TWO

  let poor;

  poor = getAcct(window.prompt("what is your account bal"));

  function getAcct(poor) {
    return poor >= 100 ? false : true;
  }
  console.log(poor);

  //  EXAMPLE THREE

  let rich = getPocket(false);
  function getPocket(rich) {
    rich
      ? console.log("you are can marry")
      : console.log("you are can't marry");
  }
};

/*  Ternary()  */

// TEMPLATE LITERALS

const TemplateLiterals = () => {
  // Template literals = delimited with (``)
  //                     instead of double or single
  //                     qoutes
  //                     Allows embedded variables
  //                     and expression.
  let name = "bro";
  let age = 10;

  greeting = `good morning ${name} i know you are ${age} years old`;
  console.log(greeting);
};

TemplateLiterals();


// VAR AND LET


