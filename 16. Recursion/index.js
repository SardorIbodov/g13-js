//? 1-n gacha sonlar yig'indisi
// const sum = n => {
// if(n <= 1) return 1;
// return n + sum(n - 1); // 1) 5 + sum(4) // 2) 5 + 4 + sum(3) // 3) 5 + 4 + 3 + sum(2)
// 4) 5 + 4 + 3 + 2 + 1
// }
// console.log(sum(5));

//? Factorial topish
// const factorial = (n) => {
// 	if(n <= 1) return 1;
// 	return n * factorial(n - 1);
// }
// console.log(factorial(5));

//? Task
// let person = {
// 	name: 'GrandFather',
// 	age: 80,
// 	child: {
// 		name: "Father",
// 		age: 50,
// 		child: {
// 			name: "Son",
// 			age: 20,
// 			child: {
// 				name: "Grandson",
// 				age: 1
// 			}
// 		},
// 	}
// };
// const sumAge = person => {
// 	if(!person) return 0;
// 	return person.age + sumAge(person.child)
// }
// let res = sumAge(person);
// console.log(res);

// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

//! Homework
//? 0 1 1 2 3 5 8 ...
// const fibonacci = num => {
// 	if(num < 2) return num;
// 	return fibonacci(num - 1) + fibonacci(num - 2);
// }
// console.log(fibonacci(4));
// 1
// fibonacci(3) + fibonacci(2)
// 2
// fibonacci(2) + fibonacci(1) + fibonacci(1) + fibonacci(0)
// 3
// fibonacci(1) + fibonacci(0) + 1 + 1 + 0
// 4
// 1 + 0 + 1 + 1 + 0 = 3
//? total salary
// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//     apps: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//   },
//   recruitment: [
//     { name: "John", salary: 2000 },
//     { name: "Alice", salary: 1500 },
//   ],
// };
// const getTotalSalary = (company) => {
//   if (Array.isArray(company)) {
//     return company.reduce((c, v) => c + v.salary, 0);
//   }
//   let sum = 0;
//   for (let key in company) {
//     sum += getTotalSalary(company[key]);
//   }
//   return sum;
// };

// const getTotalSalary = company => {
// 	if(Array.isArray(company)) {
// 		return company.reduce((v, c) => v + c.salary, 0);
// 	}
// 	else {
// 		let sum = 0;
// 		for(let child of Object.values(company)) {
// 			sum += getTotalSalary(child); 
// 		}
// 		return sum;
// 	}
// }
// console.log(getTotalSalary(company));
