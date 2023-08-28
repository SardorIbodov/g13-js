//! Object creation
//? {} => literal
// let user1 = {
//   login: "web",
//   password: 123,
//   job: "programmer",
//   country: "Uzbekistan",
// };
//? Object constructor
// let user2 = new Object({
//   login: "mobile",
//   password: 321,
//   job: "designer",
//   country: "Uzbekistan",
// });

// console.log(user1);
// console.log(user2);

//! Accessing
//? . => Static way
// let key = "password";
// console.log(user1.key);
// console.log(user1.password);
// console.log(user1.login);
// console.log(user1.country);

//? [] => dynamic
// let key = "password";
// console.log(user1[key]);

//? task
// let title = "name";
// let obj = {
  // name: "webbrain",
  // title: "IT Center",
  // name: "Webbrain Academy",
	// title: "name",
// };
// console.log(obj.title); // name
// console.log(obj["name"]); //  Webbrain Academy
// console.log(obj.name); // Webbrain Academy, 

//? Abbriviations
// let age = 20;
// let job = "Frontend Developer";
// let employee = {
// 	age, // 20
// 	job, // FD
// }
// console.log(employee);

//! Change
// let key = "password";
// let user1 = {
//   login: "web",
//   password: 123,
//   job: "programmer",
//   country: "Uzbekistan",
// };
// user1.password = 321;
// user1[key] = 321;
// console.log(user1);

//! Deleting
// delete user1.job;
// console.log(user1);

//! Muzlatish, Object.freeze(obj)
// let user1 = {
//   login: "web",
//   password: 123,
//   job: "programmer",
//   country: "Uzbekistan",
// };
// console.log(user1);
// Object.freeze(user1);
// user1.login = "WEB";
// delete user1.password;
// user1.age = 30;
// console.log(user1);

//! Object.seal(obj)
// let user1 = {
//   login: "web",
//   password: 123,
//   job: "programmer",
//   country: "Uzbekistan",
// };
// console.log(user1);
// Object.seal(user1);
// user1.login = "WEB"; // s
// delete user1.password; // f
// user1.age = 30; // f
// console.log(user1);

//! structuredClone
//? Deep copy
//? Shallow copy
// let object1 = {name: "webbrain", age: 21};
// let object2 = {name: "webbrain"};
// object2 = structuredClone(object1); //! deep copy
// console.log(object2);
// let object2 = object1; //! shallow copy 
// object1.name = "academy";
// console.log(object1, "1");
// console.log(object2, "2");

//! in
// let user1 = {
//   login: "web",
//   password: 123,
//   job: "programmer",
//   country: "Uzbekistan",
// };
// console.log("password" in user1);
// console.log("age" in user1);

//! for-in
// for(let key in user1) {
// 	console.log(`${key} => ${user1[key]}`);
// }

//! Object ni object ga qo'shish
//! Object.assign(mainObj, obj1, obj2, ...)
// let part1 = {
//   login: "web",
//   password: 123,
// };
// let part2 = {
//   job: "programmer",
//   country: "Uzbekistan",
// };

// let user = {};
// Object.assign(user, part2, part1)
// console.log(user);

// Object.assign(part1, part2);
// console.log(part1);

// let part1 = {
//   login: "web",
//   password: 123,
// 	info: {
// 		age: 30,
// 		weight: 80,
// 	}
// };
// let part2 = {};
// Object.assign(part2, part1);
// let part3 = structuredClone(part1);
// part1.info.weight = 85;
// console.log(part1.info === part2.info);
// console.log(part2);
// console.log(part3);

//! Function in object
//? 1
// let triangle = {
// 	tomon: 20,
// 	balandlik: 15,
// 	yuza: function() {
// 		console.log(triangle.tomon * triangle.balandlik / 2);
// 	}
// }
// triangle.yuza();
//? 2
// let triangle = {
// 	tomon: 20,
// 	balandlik: 15,
// 	yuza: () => {
// 		console.log(triangle.tomon * triangle.balandlik / 2);
// 	}
// }
// triangle.yuza();
//? 3
// let triangle = {
// 	tomon: 20,
// 	balandlik: 15,
// 	yuza() {
// 		console.log(triangle.tomon * triangle.balandlik / 2);
// 	}
// }
// triangle.yuza();
