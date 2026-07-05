// 5 - adding javascript to a web page
alert('hello, world');
// ======================================================
// 6 - the browser console
console.log(1);
console.log(2);
// ======================================================
// 7 - variables & constants
let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);

const points = 100;
points = 50;
console.log(points);

var score = 75;
console.log(score);
// ======================================================
// 8 - types
// ======================================================
// 9 - strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log('index of the @ sign:', index);
// ======================================================
// 10 - common string methods
email = 'mario@thenetninja.co.uk';
result = email.lastIndexOf('n');
result = email.slice(0, 5);
result = email.substr(5, 12);
result = email.replace('m', 'w');
result = email.replace('n', 'w');
console.log(result);
// ======================================================
// 11 - numbers
let radius = 10;
let pi = 3.14;
console.log(radius, pi);

// math operators - +, -, *, /, **, %
console.log(10 / 2);
result = radius % 3;
result = pi * radius ** 2;

// order of operation - B I D M A S
result = 5 * (10 - 3) ** 2;
console.log(result);

// shorthands
likes = 10;
likes = likes + 1;
likes++;
likes = likes + 10;
likes += 10;
likes *= 2;
likes /= 2;
console.log(likes);

// NaN - not a number
console.log(5 / 'hello');
console.log(5 * 'hello');
result = 'the blog has ' + likes + ' likes.';
console.log(result);
// ======================================================
// 12 - template strings
// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
result =
  'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

// template string way
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;
console.log(html);
// ======================================================
// 13 - arrays
let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
console.log(ninjas[1]); // ryu
ninjas[1] = 'ken';
console.log(ninjas[1]); // ken

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

// array length
console.log(ninjas.length); // 3

// array methods
result = ninjas.join(',');
result = ninjas.join('-');
result = ninjas.indexOf('chun-li'); // 2
result = ninjas.concat(['ken', 'crystal']);
result = ninjas.push('ken');
result = ninjas.pop();
console.log(result);
console.log(ninjas);
// ======================================================
// 14 - null & undefined
let myAge; // myAge is not yet defined
console.log(myAge, myAge + 3, `the age is ${myAge}`); // undefined NaN "the age is undefined"
myAge = null; // explicitly set myAge with no value
console.log(myAge, myAge + 3, `the age is ${myAge}`); // null 3 "the age is null"
// ======================================================
// 15 - booleans & comparisons
console.log(true, false, 'true', 'false');

// methods can return booleans
email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];
result = email.includes('@');
console.log(result);
result = names.includes('luigi');
console.log(result);

// comparison operators
age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);
let myName = 'shaun';
console.log(myName == 'shaun'); // true
console.log(myName == 'Shaun'); // false
console.log(myName > 'crystal'); // true
console.log(myName > 'Shaun'); // true
console.log(myName > 'Crystal'); // true
// ======================================================
// 16 - loose vs strict comparison
age = 25;

// loose comparison (different types can still be equal)
console.log(age == 25); // true
console.log(age == '25'); // true
console.log(age != 25); // false
console.log(age != '25'); // false

// strict comparison (different types cannot be equal)
console.log(age === 25); // true
console.log(age === '25'); // false
console.log(age !== 25); // false
console.log(age !== '25'); // true
// ======================================================
// 17 - type conversion
let score = '100';
console.log(typeof score); // string
score = Number(score);
console.log(score + 1); // 101
console.log(typeof score); // number

result = Number('hello');
console.log(result); // NaN
result = String(50);
console.log(result, typeof result); // 50 string
result = Boolean(100);
console.log(result, typeof result); // true "boolean"
result = Boolean(0);
console.log(result, typeof result); // false "boolean"
result = Boolean('0');
console.log(result, typeof result); // true "boolean"
result = Boolean('');
console.log(result, typeof result); // false "boolean"
// ======================================================
// 19 - for loops
for (let i = 0; i < 5; i++) {
  console.log('Loop number: ', i);
}
console.log('Loops completed');

const names2 = ['shaun', 'mario', 'luigi'];
for (let i = 0; i < names2.length; i++) {
  console.log(names2[i]);
  let html = `<div>${names2[i]}</div>`;
  console.log(html);
}
// ======================================================
// 20 - while loops
const names3 = ['shaun', 'mario', 'luigi'];
let i = 0;

while (i < 5) {
  console.log('loop: ', i);
  i++;
}
while (i < names3.length) {
  console.log(names3[i]);
  i++;
}
i = 8;
while (i > 5) {
  console.log('loop: ', i);
  i--;
}
// ======================================================
// 21 - do while loops
let y = 3;

do {
  console.log('Value of y is: ', y);
  y++;
} while (y < 5);
// ======================================================
// 22 - if statements
const age1 = 25;
if (age1 > 20) {
  console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if (ninjas.length > 3) {
  console.log("that's a lot of ninjas!"); // use double quotes
}

const password = 'p@ssword';
if (password.length >= 8) {
  console.log('that password is long enough');
}
// ======================================================
// 23 - else if statements
const password2 = 'p@ssword123456';
if (password2.length >= 12) {
  console.log('that password is very strong');
} else if (password2.length >= 8) {
  console.log('that password is long enough');
} else {
  console.log('password should be at least 8 characters long');
}
// ======================================================
// 24 - logical operators
const password3 = 'p@ss12';
if (password3.length >= 12 && password3.includes('@')) {
  console.log('that password is mighty strong');
} else if (
  password3.length >= 8 ||
  (password3.includes('@') && password3.length > 5)
) {
  console.log('that password is strong enough');
} else {
  console.log('that password is not strong enough');
}
// ======================================================
// 25 - logical NOT (!)
const user = false;
if (!user) {
  // do something
  console.log('you must be logged in to continue');
}
console.log(!true);
console.log(!false);
// ======================================================
// 26 - break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }
  console.log('your score:', scores[i]);
  if (scores[i] === 100) {
    console.log('congrats, you got the top score!');
    break;
  }
}
// ======================================================
// 27 - switch statements
const grade = 'D';
switch (grade) {
  case 'A':
    console.log('you got an A grade');
    break;
  case 'B':
    console.log('you got a B grade');
    break;
  case 'C':
    console.log('you got a C grade');
    break;
  case 'D':
    console.log('you got a D grade');
    break;
  case 'E':
    console.log('you got an E grade');
    break;
  default:
    console.log('not a valid grade');
}

// using if statements
if (grade === 'A') {
} else if (grade === 'B') {
} else if (grade === 'C') {
} else if (grade === 'D') {
} else if (grade === 'E') {
} else {
}
// ======================================================
// 28 - variables and block scope
let age = 30;
if (true) {
  let age = 40;
  let name = 'shaun';
  console.log('inside 1st code block:', age, name);
  if (true) {
    let age = 50;
    console.log('inside 2nd code block:', age, name);
  }
}
console.log('outside code block:', age, name);
// ======================================================
// 30 - function declaration
function greet() {
  console.log('hello there');
}
// function expression
const speak = function () {
  console.log('good day');
};
greet();
greet();
greet();
speak();
speak();
speak();
// ======================================================
// 31 - arguments & parameters
const speak = function (name = 'rob', time = 'night') {
  console.log(`good ${time}, ${name}!`);
};
// 'mario' and 'morning' are arguments
speak('mario', 'morning');

speak();

// 'rob' is replaced by 'shaun'
// 'night' is the default value
speak('shaun');
// ======================================================
// 32 - return statements
const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};
const area = calcArea(7);
console.log('area is:', area);
// ======================================================
// 33 - arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function
const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log('area is:', area);

// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

const greet = () => 'hello, world';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(greet());
console.log(bill([10, 15, 30], 0.2));
// ======================================================
