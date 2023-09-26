// var user1 = {
//   login: "user1",
//   password: 123,
//   details: "first course",
// };
//! Object.getOwnPropertyDescriptor(object, key)
// console.log(Object.getOwnPropertyDescriptor(user1, "login"));

//! Object.defineProperty(object, key, {})
// for (let key in user1) {
//   console.log(key);
// }
// Object.defineProperty(user1, "password", { enumerable: false });
// console.log(Object.getOwnPropertyDescriptor(user1, "password"));

// console.log("---------------------------------");
// for (let key in user1) {
//   console.log(key);
// }

// Object.defineProperty(user1, "password", {configurable: false});
// delete user1.password;
// console.log(user1);

// Object.defineProperty(user1, "password", { writable: false });
// user1.password = 321;
// console.log(user1);

//! Object.preventExtensions()
// Object.preventExtensions(user1);
// user1.name = "John";
// console.log(user1);
// Object.defineProperty(window, "user1", { writable: false });
// user1 = {
//   name: "John",
//   login: "user1",
//   password: 123,
//   details: "first course",
// };
// console.log(user1);

//! getter, setter
// let user1 = {
//   login: "user1",
//   password: 123,
//   details: "first course",
//   get showInfo() {
//     console.log(this.login, this.details);
//   },
// 	set changeLogin(newLogin) {
// 		this.name = newLogin;
// 	}
// };
// user1.changeLogin = "USER1"
// console.log(user1);
