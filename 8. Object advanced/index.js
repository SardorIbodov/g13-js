//! Task
// const person = {
//   name: "Grandfather",
//   age: 90,
//   child: {
//     name: "Father",
//     age: 50,
//     child: {
//       name: "Son",
//       age: 25,
//       child: {
//         name: "Kid",
//         age: 1,
//       },
//     },
//   },
// };

// const calcAge = (object) => {
// 	//? 1, sum = 90
// 	//? 2, sum = 90 + 50
// 	//? 3, sum = 90 + 50 + 25
// 	//? 4, sum = 90 + 50 + 25
// 	let current = object;
// 	let sum = 0;
// 	while(current.child) {
// 		sum += current.age;
// 		current = current.child;
// 	}
// 	return sum += current.age;
// };
// console.log(calcAge(person));

// const calcAge = (object) => {
// 	let sum = 0;
// 	while(object) {
// 		sum += object.age;
// 		object = object.child
// 	}
// 	return sum;
// }
// console.log(calcAge(person));

// const calcAge = (object) => {
//   let current = object;
//   let sum = 0;
//   do {
//     sum += current.age;
//     current = current.child;
//   } while (current);
//   return sum;
// };
// console.log(calcAge(person));

//! Garbage collection
// let object = {
// 	login: "web",
// 	password: 123,
// }
// object = null;
//? unreachable
// console.log(object.login);
// console.log(object.password);

//! this => o'zi turgan scopeni "{}" ni qaytaradi
// const person = {
// 	name: "WEB",
// 	getThis(){
// 		console.log(this);
// 		console.log(this.name); // "WEB"
// 	}
// };
// person.getThis();

// let object = {
//   login: "web",
//   password: 123,
//   getInfo() {
//     // console.log(`"${object.login}" Foydalanuvchi paroli: ${object.password}`); // ?
//     console.log(`"${this.login}" Foydalanuvchi paroli: ${this.password}`); // ?
//   },
// };
// let object2 = {};
// Object.assign(object2, object);
// object = null;
// console.log(object2);
// object2.getInfo();

//! this in other types of functions
// let car2 = {
//   engine: 1.5,
//   year: 2022,
//   getInfo: function () {
//     console.log(this, "=> this");
//   },
// };
// car2.getInfo();

// let car1 = {
//   engine: 1.5,
//   year: 2022,
//   getInfo: () => {
//     console.log(this, "=> this");
//     console.log(this.year);
//   },
// };
// car1.getInfo();

//! Destructure => qayta qurish
// let name = "WEB";
// let user = {
//   name: "dev",
//   age: 23,
//   position: "beginner",
//   interests: "art",
//   info: {
//     height: 178,
//     weight: 80,
//   },
// };
// let {
//   name: ism,
//   age,
//   position,
//   interests,
//   info: { height, weight },
// } = user;

// const getFullDetails = ({name, position}) => {
// 	console.log(`${name} ismli foydalanuvchi kursni ${position} leveldan boshlamoqchi!`);
// }
// getFullDetails(user);

// const person = {
//   name: "Grandfather",
//   age: 90,
//   child: {
//     name: "Father",
//     age: 50,
//     child: {
//       name: "Son",
//       age: 25,
//       child: {
//         name: "Kid",
//         age: 1,
//       },
//     },
//   },
// };

// const {
//   name,
//   age,
//   child: {
//     name: fatherName,
//     age: fatherAge,
//     child: { name: sonName },
//   },
// } = person;

// console.log(sonName);

//! Spread operator (...) (spread => yoyib yuborish)
// let user = {
//   name: "dev",
//   age: 23,
//   position: "beginner",
//   interests: "art",
//   info: {
//     height: 178,
//     weight: 80,
//   },
// };
// let user2 = { name: "DEV" ,...user };
// console.log(user2);
// let user2 = { ...user };
// user.name = "DEV";
// user.info.height = 180;
// console.log(user2);

//! Optional chaining (?)
// let car = {
  // engine: 1.5,
  // year: 2022,
  // info: {name: ...}
// };
// console.log(car?.info?.name);
// console.log(car.info.name);
// console.log(1);
// console.log(2);
// console.log(3);