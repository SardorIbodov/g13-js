//! Function
//? reuseable

//! Function declaration
//? Greet
// function greet(firstName){
// 	console.log(`Saytimizga xush kelibsiz hurmatli ${firstName}`, "funksiya logikasi");
// 	return 1;
// }
// console.log(greet("Eshmat"), "funksiyani qiymati");
// greet("Toshmat");
// greet("Xolmat");

// let firstName = "Eshmat";
// console.log(`Saytimizga xush kelibsiz hurmatli ${firstName}`);

// let secondName = "Eshmat";
// console.log(`Saytimizga xush kelibsiz hurmatli ${secondName}`);

// let thirdName = "Eshmat";
// console.log(`Saytimizga xush kelibsiz hurmatli ${thirdName}`);

//? (1 - n) Juft sonlarni topish
// function getEven(n) {
// 	for(let i = 0; i <= n; i += 2) {
// 		console.log(i);
// 	}
// }
// getEven(15);
// getEven(150);
// getEven(20);

// 	for(let i = 0; i <= 15; i += 2) {
// 		console.log(i);
// 	}

// 	for(let i = 0; i <= 150; i += 2) {
// 		console.log(i);
// 	}

// 	for(let i = 0; i <= 20; i += 2) {
// 		console.log(i);
// 	}

//? k - n juft sonlar (k < n)
// function getEven(k, n) {
// 	if(k >= n) console.log("Noto'g'ri oraliq berildi!");
// 	else for(let i = k; i <= n; i++) {
// 		if(i % 2 === 0) console.log(i);
// 	}
// }
// getEven(100, 100)

//? Faktorial (6! = 1 * 2 * 3 * 4 * 5 * 6)
// function factorial(f) {
// 	let result = 1;
// 	for(let i = 2; i <= f; i++) {
// 		// i = 2
// 		// result = 1 * 2

// 		// i = 3
// 		// result = 1 * 2 * 3

// 		// ...

// 		// i = f
// 		// result = 1 * 2 * 3 * ... * (f-1) * f
// 		result = result * i;
// 	}
// 	// result = 1 * 2 * 3 * ... * f
// 	console.log(result);
// }

// factorial(5);
// factorial(7);

//? return vazifalari
//? 1. Return ga yozilgan qiymat funksiya qiymatiga teng b-di
//? 2. Funksiyani to'xtatadi
// function greet(firstName){
// 	console.log(9);
// 	return `Saytimizga xush kelibsiz hurmatli ${firstName}`;
// 	console.log(10);
// }
// greet("Eshmat");
// let natija = greet("Eshmat");
// console.log(natija);

// function factorial(f) {
// 	let result = 1;
// 	for(let i = 2; i <= f; i++) {
// 		result = result * i;
// 	}
// 	return result;
// }

// let natija = factorial(5) * factorial(7);
// console.log(natija);

// function getEven(k, n) {
//   if (k >= n) return "Noto'g'ri oraliq berildi!";
//   for (let i = k; i <= n; i++) {
//     if (i % 2 === 0) console.log(i);
//   }
// }
// let natija = getEven(100, 200);
// console.log(natija);

//! Function expression
// const getEven = function (k, n) {
//   if (k >= n) return "Noto'g'ri oraliq berildi!";
// 	for (let i = k; i <= n; i++) {
//     if (i % 2 === 0) console.log(i);
//   }
// };
// let natija = getEven(100, 200);
// console.log(natija);

//! Arrow function (ES6 => 2015)
// const getEven = (k, n) => {
//   if (k >= n) return "Noto'g'ri oraliq berildi!";
//   for (let i = k; i <= n; i++) {
//     if (i % 2 === 0) console.log(i);
//   }
// };
// let natija1 = getEven(100, 200);
// let natija2 = getEven(200, 300);
// console.log(natija1);
// console.log(natija2);

//! 1 1 2 3 5 8 ....
//! n - fibonacci soni toping
//! n -> pozitsiya
// const getFibonacci = (n) => {
// 	if(n <= 0) return "Noto'gri o'rin";
// 	else if(n === 1 || n === 2) return 1;
// 	else {
// 		let result = 0;
// 		let current1 = 1;
// 		let current2 = 1;
// 		for(let i = 3; i <= n; i++) {
// 			result = current1 + current2;
// 			current2 = current1;
// 			current1 = result;
// 		}
// 		return result;
// 	}
// }
// let natija = getFibonacci(6);
// console.log(natija);

//! Tub sonlarni topish
// const getPrime = (n) => {
//   if (n <= 0 || n === 1) return "Noto'g'ri son kiritilgan!";
//   for (let i = 2; i <= n; i++) {
//     let count = 0;
//     for (let k = 1; k <= i; k++) {
//       if (i % k === 0) count++;
//     }
//     if (count === 2) console.log(i);
//   }
// };
// let natija = getPrime(2);
// console.log(natija);
