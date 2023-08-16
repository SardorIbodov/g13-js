// console.log("Hello world");
//! JS ni compile(yurgizish) usullari
//? 1. HTML file bilan
//? 2. Online compiler
//? 3. NodeJS

//! O'zgaruvchi
//! JS => EcmaScript 6 => 2015
//? 1. var => EcmaScript 5
//? 2. let => EcmaScript 6 => qiymati o'zgaruvchan
//? 3. const => EcmaScript 6 => qiymati bir xil
// var million = 1000000;
// let ming = 1000;
// ming = 10;
// const yuz = 100;
// yuz = 10;
// console.log(million);
// console.log(yuz);
// console.log(yuz);

//! O'zguruvchilarni e'lon qilish
//? 1
// let a = 2;
// let b = 3;
// let c = 4;
// console.log(a);
// console.log(b);
// console.log(c);
//? 2
// let a = 2, b = 3, c = 4;
// a = 21;
// b = 34;
// c = 45;
// console.log(a, b, c);

//! Data types => Ma'lumot turlari
//! typeof => o'zgaruvchini ma'lumot turini aytib beradi
//? Primitive => oddiy => 7 xil
//! Number (-9007199254740992)-(+9007199254740992)
// let a = 2;
// console.log(typeof a);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

//! String => "", '', ``
// let a = 1000000;
// let title1 = "'webbrain academy' ga xush kelibsiz!1"; // => ES5
// let title2 = '"webbrain academy" ga xush kelibsiz!2'; => ES5
// let title3 = `${a}'webbrain academy'ga xush kelibsiz!3`; // => ES6
// console.log(title3);
// console.log(typeof "salom");
// console.log(typeof 'salom');
// console.log(typeof `salom`);

//! Boolean => Mantiqiy ma'lumot turi
//? Qiymatlari: true => rost, false => yolg'on
// let isAdult = true;
// isAdult = false;
// console.log(isAdult);
// console.log(typeof isAdult);

//! BigInt
// let katta = 9007199254740992n;
// let kichik = 9007199254740991;
// console.log(typeof katta);
// console.log(typeof kichik);
// console.log(katta * 2n);

//! Undefined
// let a = undefined;
// let b;
// console.log(b);
// console.log(typeof b);

//! Null
// let a = null;
// console.log(a);
// console.log(typeof a);

//! Symbol => ES6 => for creating unique ID => qiymati takrorlanmaydigan ID yasash uchun
// let a = Symbol(1);
// a = Symbol(2);
// console.log(a);
// console.log(typeof a);

//? Non-primitive => oddiy bo'lmagan
//! Object => (object, array, function)
// let firstName = "Webbrain";
// let age = 18;
// let status = "student";
// let major = "IT";
// let user = {
//   firstName: "Webbrain", // key: value,
//   age: 18,
//   status: "student",
//   major: "IT",
// };
//! Array
// let users = ["Webbrain", "academy", "IT", "center"];
// let number = [2, 4, 6, 8, 10];
// console.log(number[3]);
// console.log(typeof users);
// console.log(typeof number);
// let users = [
// 	{
// 		name: "sfdsaf",
// 		age: 32,
// 		status: "43"
// 	},
// ]
//! Function
// function sayHi() {
// 	let a = 2 + 2;
// 	console.log("Salom", a);
// }
// sayHi();
// sayHi();
// sayHi();

//! Primitive vs Non-primitive
//? 1
// let a = 10;
// let b = a; // 10
// a = 20;
// console.log(a, "a");
// console.log(b, "b");
// let user1 = {name: "wba", age: 3}
// let user2 = user1; // {name: "wba", age: 3}
// user1.name = "webbrain";
// console.log(user1, "1");
// console.log(user2, "2");

//! alert() => ekranga ma'lumot chiqarish
// alert("Hello World");
console.log(1 + 1 + 1 + 1);
