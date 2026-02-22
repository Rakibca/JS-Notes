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
let email = 'mario@thenetninja.co.uk';
let result = email.lastIndexOf('n');
let result = email.slice(0, 5);
let result = email.substr(5, 12);
let result = email.replace('m', 'w');
let result = email.replace('n', 'w');
console.log(result);
// ======================================================
// 11 - numbers
let radius = 10;
let pi = 3.14;
console.log(radius, pi);

// math operators - +, -, *, /, **, %
console.log(10 / 2);
let result = radius % 3;
let result = pi * radius ** 2;

// order of operation - B I D M A S
let result = 5 * (10 - 3) ** 2;
console.log(result);

// shorthands
let likes = 10;
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
let result = 'the blog has ' + likes + ' likes.';
console.log(result);
// ======================================================
// 12 - template strings
// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
let result =
  'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;
console.log(html);
// ======================================================
