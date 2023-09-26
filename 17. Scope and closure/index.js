// const a = 1;
// function test() {
//   const b = 2;
//   console.log("inside", a, b);
// }
// test();
// console.log("outside", a, b);

//! JS da 4 xil scope bor
//? 1. Global scope
//? 2. Module scope
//? 3. Block scope
//? 4. Function scope

//? Global
// const title = "webbrain";
// function getData() {
//   console.log(title);
// }
// for(let i = 0; i < 2; i++) {
// 	console.log(title);
// }
// getData();
//? Block scope
//? ES6 => const, let => block scope
// let title = "webbrain";
// if (true) {
//   var fullName = "academy";
// }
// for (let i = 0; i < 2; i++) {}
// switch (title) {
//   case "webbrain": {
//     var a = 10;
//   }
// }
// console.log(a);
//? Functional scope
// function getData() {
//   let a = 10;
//   var b = 20;
// 	if(true) {
// 		console.log(a, b);
// 	}
// }
// getData();

// console.log(a);
// console.log(b);

// function test() {
//   const c = 2;
//   if (true) {
//     const c = 3;
//     console.log("inside", c); // 3
//   }
//   console.log("outside", c); // 2
// }
// test()

//! Closure
// const a = 1;
// function test() {
//   console.log(a);
// }
// test();
// let fullName = "academy";
// function outer(param1) {
//   let title = "webbrain";
//   return function inner(param2) {
//     console.log(param1, param2, title, fullName);
//   };
// }
// outer("tashqari")("ichkari");
