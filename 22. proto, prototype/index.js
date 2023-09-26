// let part1 = {
//   name: "John",
// };
// let part2 = {
//   age: 25,
// };
// Object.assign(part1, part2);
// console.log(part1.age);
// console.log(part1);
//! __proto__
// part1.__proto__ = part2;
// console.log(part1.age);
// console.log(part1);
// console.log(part1.toString());

// let array = [1, 3, 5, 7, 9];
// console.log(array.forEach);

//! prototype
// Array.prototype.removeEvens = function () {
//   return this.filter((v) => v % 2 !== 0);
// };
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array.removeEvens());

// let string = new String("webbrain");
// console.log(string);
// String.prototype.sayHi = function () {
//   console.log("hi");
// };
// let string = "salom";
// string.sayHi();

// let array = [1, 2, 3];
// array.prototype.removeEvens = function () {
//   return this.filter((v) => v % 2 !== 0);
// };
// console.log(array);
// console.log(array.prototype);

// const getName = () => {
//   return 1;
// };
// console.log(getName.__proto__);

// Function.prototype.sayHi = function () {
//   return "hi from function";
// };
// console.log({});
// const getData1 = () => 1;
// const getData2 = () => 2;

// console.log(getData1.sayHi());
// console.log(getData2.sayHi());
// console.log(getData2);
