// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

//! Format
// let million = 1_000_000;
// console.log(million);
// console.log(million * 12);
// console.log(million + 12);
// let million = "1_000_000";
// console.log(+million); //! NaN

//! Daraja
// let million = 1000000;
// let million2 = 12e6;
// console.log(million2);

//! parseInt => butun qism, parseFloat => butun + kasr

//! Issue
// console.log(0.1 + 0.2);
// console.log(0.4 + 0.5);
// console.log(0.3 + 0.6);

//! toFixed => (number => string)
// let num1 = 123.123721;
// num1 = +num1.toFixed(4);
// console.log(num1);

//! toPrecision
// let num2 = 123.123721;
// num2 = +num2.toPrecision(1);
// console.log(num2);

//! 2 => 10 (parseInt)
// let num = 1100; // 1100 => 2 ^ 2 + 2 ^ 3
// num = parseInt(num, 2);
// console.log(num);

//! 10 => 2 (toString) => [2, 36] oraliqda ishlaydi
// let num = 75;
// num = +num.toString(2);
// console.log(num);
// num = num.toString(16);
// console.log(num);

//! isNaN()
// console.log(NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(1)); // false
// console.log(isNaN(true)); // false
// console.log(isNaN(null)); // false
// console.log(isNaN(undefined)); // true
// console.log(isNaN("webbrain")); // true
// console.log(isNaN({ name: "webbrain" })); // true
// console.log(isNaN(["webbrain"])); // true

//! ===, Object.is(value1, value2)
// console.log(Object.is("2", 2));
// console.log(Object.is(2, 2));

//! MATH
//? PI
// console.log(Math.PI);
//? E
// console.log(Math.E);
//? abs
// console.log(Math.abs(-5));
// console.log(Math.abs(5));
// console.log(Math.abs(0));
// console.log(Math.abs(-0));
//? sin,cos,tan,ctg = 1 / tan
//? round
// console.log(Math.round(1.51));
// console.log(Math.round(1.49));
// console.log(Math.round(1.5));
// console.log(Math.round(-1.51));
//? floor
// console.log(Math.floor(2.99));
// console.log(Math.floor(2.01));
//? ceil
// console.log(Math.ceil(2.01));
// console.log(Math.ceil(2.99));
// console.log(Math.ceil(-2.99));
//? trunc
// console.log(Math.trunc(2.99));
// console.log(Math.trunc(2.01));
//? pow
// console.log(Math.pow(2, 5));
//? min
// console.log(Math.min(1, 2, 3, 4, 5, 6, -4, 3, 2));
//? max
// console.log(Math.max(1, 2, 3, 4, 5, 6, -4, 3, 2));
//? sqrt
// console.log(Math.sqrt(16));
//? cbrt
// console.log(Math.cbrt(27));
//? sign
// console.log(Math.sign(-24));
// console.log(Math.sign(24));
// console.log(Math.sign(0));
// console.log(Math.sign(-0));
//? random => [0, 1)
// console.log(Math.random());
//? 0 - 10
// [0 - 1) * 10 => [0, 10) + 1 => [1, 11) => [1, 10]
// console.log(Math.trunc(Math.random() * 10) + 1);
//? 25 - 50
// [0, 1) * 26 => [0, 26) => [0, 25] + 25 => [25, 50]
// console.log(Math.trunc(Math.random() * 25) + 25); 

//? Homework
//! Random generator
// const randomGenerator = (min, max) => Math.trunc(Math.random() * (max - min + 1)) + min;

//! Math methodlarini yozib kelish => (sign, sqrt, cbrt, pow, abs, round, floor, ceil, trunc)
// const mySqrt = (number) => number ** (1 / 2);
// console.log(mySqrt(25));

//! Codewars

