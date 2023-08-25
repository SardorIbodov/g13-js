//! Switch-case
//? Hafta kunlari (Mon => Monday)
// let day = "Friday";
// switch(day) {
// 	case "Monday": console.log("Mon"); break;
// 	case "Tuesday": console.log("Tue"); break;
// 	case "Wednesday": console.log("Wed"); break;
// 	case "Thursday": console.log("Thu"); break;
// 	case "Friday": console.log("Fri"); break;
// 	case "Saturday": console.log("Sat"); break;
// 	case "Sunday": console.log("Sun"); break;
// 	default: console.log("Noto'g'ri ma'lumot kiritildi!");
// }

//? Simple calculator
// let operator = "/";
// let a = 2, b = 5;
// switch(operator) {
// 	case "+": console.log(a + b); break;
// 	case "-": console.log(a - b); break;
// 	case "*": console.log(a * b); break;
// 	case "/": console.log(a / b); break;
// 	default: console.log("Noto'g'ri ma'lumot kiritildi!");
// }
// console.log(select);

//? Greetings
// let language = "en";
// switch(language) {
// 	case "en": console.log("Hello"); break;
// 	case "uz": console.log("Salom"); break;
// 	case "esp": console.log("Hola"); break;
// 	case "ru": console.log("Privet"); break;
// }
// if(language === "en") console.log("Hello");
// else if(language === "uz") console.log("Salom");
// else if(language === "esp") console.log("Hola");
// else if(language === "ru") console.log("Privet");
// else console.log("404");

//! loop
//? while
//? do-while
//? for

//? 1 - 100 gacha juft va toq sonlarni topish
// let i = 1;
// while(i <= 100) {
// 	i++;
// 	if(i % 2 === 1) console.log(i);
// }

//? 1 - 100 gacha juft sonlar yig'indisi
// let i = 1;
// let sum = 0;
// while(i <= 100) {
// 	if(i % 2 === 0) {
// 		sum += i;
// 		console.log(i, "son");
// 		console.log(sum, "yigindi");
// 	};
// 	i++;
// }
// console.log(sum, "natija");

//? 1 - 50 gacha toq sonlar yig'indisi
// let i = 1;
// let sum = 0;
// while(i <= 50) {
// 	if(i % 2 === 1) sum += i;
// 	i++;
// }
// console.log(sum);

//? while() => break (ctr + c)
// let i = 100;
// while(true) {
// 	console.log(i);
// 	i--;
// }

//! do-while
//? 1 - 100 gacha juft
// let i = 1;
// do {
//  console.log(i); // 1, 2, ... 99, 100
//  i++; // 2, 3, ...., 100, 101
// } while(i <= 100) // true, ..., true
// console.log(i, "oxirgi");

//? Faktorial (5! = 1 * 2 * 3 * 4 * 5)
// let n = 5;
// let factorial = 1;
// do {
// 	if(n == 2) break;
// 	n--;
// 	factorial *= n;
// } while(n >= 0)
// console.log(factorial, "do-while");

// -------------
// let k = 5;
// let factorial1 = 1;
// while(k >= 0) {
// 	k--;
// 	factorial1 *= k;
// }
// console.log(factorial1, "while");

//! for(let i = bosh; condition; iteration) {

//! }

// for (let i = 0; i <= 100; i += 2) {
// 	console.log(i);
// }

// 1 - 100, 5
// for(let i = 1; i <= 100; i++) {
// 	if (i !== 5) console.log(i);
// }

//! continue => gal o'tkizadi
//! break => to'xtatadi
// for(let i = 1; i <= 100; i++) {
// 	if(i === 5) break;
// 	console.log(i);
// }

//?
// for(; i <= 100; i++) {
// 	console.log(i);
// }

//?
// for(let i = 1; ; i++) {
// 	console.log(i);
// }

//?
// for(let i = 1; i <= 100;) {
// 	console.log(i);
// }

//?
// for(;;) {
// 	console.log("some");
// }

//! n gacha tub sonlarni topish
// let n = 10;
// for (let i = 2; i <= n; i++) {
//   let buluvchilariSoni = 0;
//   for (let k = 1; k <= i; k++) {
//     if (i % k === 0) buluvchilariSoni++;
// 		if(buluvchilariSoni > 2) break;
//   }
//   if (buluvchilariSoni === 2) console.log(`${i} - tub son`);
// }

//!
// *
// **
// ***
// ****
// *****
// ******
// *******
// let n = 10;
// for(let i = 1; i <= n; i++) {
// 	let str = "";
// 	for(let k = 1; k <= i; k++) {
// 		str += "*";
// 		console.log(str);
// 	}
// 	console.log(str);
// 	str = "";
// }

// let n = 10;
// let str = "";
// for(let i = 1; i <= 10; i++) {
// 	str += "*";
// 	console.log(str);
// }

// **********
// *        *
// *        *
// *        *
// **********

// let width = 11;
// let height = 5;
// for(let q = 1; q <= height; q++) {
// 	let str = "";
// 	for(let u = 1; u <= width; u++) {
// 		if(q === 1 || q === height) {
// 			str += "*"
// 		} else {
// 			if(u === 1 || u === width) {
// 				str += "*"
// 			} else {
// 				if(q === height / 2 + 0.5 && u === width / 2 + 0.5) str += "S";
// 				else str += " ";
// 			};
// 		}
// 	}
// 	console.log(str);
// 	str = "";
// }

// n = 10
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *
// * * * * * * *

// const n = 10;
// let str = "";
// for(let i = 1; i <= n; i++) {
// 	for(let k = 1; k <= n; k++) {
// 		if(i >= 2) break;
// 		str += "* ";
// 	}
// 	console.log(str);
// }

// * * * * * * *
// *         * *
// *       *   *
// *     *     *
// *   *       *
// * *         *
// * * * * * * *
// const n = 10;
// for (let i = 1; i <= 10; i++) {
//   let str = "";
//   for (let k = 1; k <= 10; k++) {
//     if (i === 1 || i === n) {
//       str += "* ";
//     } else {
//       if (k === 1 || k === n || i + k === n + 1) {
//         str += "* ";
//       } else str += "  ";
//     }
//   }
// 	console.log(str);
// 	str = "";
// }

// * * * * * * *
// * *       * *
// *   *   *   *
// *     *     *
// *   *   *   *
// * *       * *
// * * * * * * *
// const n = 11;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let k = 1; k <= n; k++) {
//     if (i === 1 || i === n) {
//       str += "* ";
//     } else {
//       if (k === 1 || k === n || i + k === n + 1 || i === k) {
//         str += "* ";
//       } else str += "  ";
//     }
//   }
// 	console.log(str);
// 	str = "";
// }

// # # # * # # #
// # # * * * # #
// # # * * * # #
// # * * * * * #
// * * * * * * *
//     * * *

// const n = 10;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let k = i; k < n; k++) {
//     str += " ";
//   }
//   for (let j = 1; j <= i * 2 - 1; j++) {
//     str += "*";
//   }
//   console.log(str);
//   str = "";
// }

// "#########*"

// *            *
// **          **
// ***        ***
// ****      ****
// *****    *****
// ******  ******
// **************
// const b = 7,
//   e = 14;
// for (let i = 1; i <= b; i++) {
//   let str = "";
//   for (let k = 1; k <= e; k++) {
//     if (k <= 7) {
//       if (k <= i) {
//         str += "*";
//       } else str += " ";
//     } else {
//       if (e - i + 1 <= k) {
//         str += "*";
//       } else str += " ";
//     }
//   }
//   console.log(str);
//   str = "";
// }

// let i = 0; // initial
// while(condition) {
// 	// logic
// 	i++; // change
// }

// for(let i = 0 // initial; condition; change) {
// logic
// }

// for(let i = 1; i <= 10; i++) {
// 	console.log("tashqi");
// 	//! i = 1
// 	for(let k = 1; k <= 3; k++) {
// 		//? k = 1
// 		//? k = 2
// 		//? k = 3
// 		console.log("ichki");
// 	}
// 	//! i = 2
// 	//? k = 1
// 	//? k = 2
// 	//? k = 3

// 	// ...

// 	//! i = 10
// 	//? k = 1
// 	//? k = 2
// 	//? k = 3
// }

