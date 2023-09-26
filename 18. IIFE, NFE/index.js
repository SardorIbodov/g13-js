//! IIFE => Immediately Invoked Function Expression
// (function() {
// 	console.log("Birinchi IIFE");
// })()
// (favouriteNum = function (number) {
//   console.log(`My favourite number is ${number}`);
// })(9);
// favouriteNum(7);
// var a = 2;
// (function () {
//   var a = 3;
//   console.log(a);
// })();
// console.log(a);
// let a = 2;
// function getData() {
// 	let a = 3;
// 	console.log(a);
// }
// getData();
// console.log(a);

//! NFE => Named Function Expression
// let getData = function data() {
//   console.log("salom");
// };
// getData();
// data();
// const fact = function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// };
// console.log(fact(5));
// factorial(5);

//! new Function (closure doesn't work)
// function getData() {
// 	let a = 10;
// 	return new Function(`console.log(a)`) 
// }
// getData()();

//! window, globalThis => global object for JS
//! global => global object for NodeJS
// console.log(window);
// console.log(global);
// console.log(globalThis);

