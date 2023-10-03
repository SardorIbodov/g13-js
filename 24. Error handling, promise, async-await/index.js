//! Error handling
// try {
// 	console.log(a);
// } catch(error) {
// 	console.log(error, "error");
// 	//? 1. message
// 	console.log(error.message, "message");
// 	//? 2. name
// 	console.log(error.name, "name");
// 	//? 3. stack
// 	console.log(error.stack, "stack");
// }

// try {
// 	"1".map(v => console.log(v))
// } catch (error) {
// 	console.log(error);
// }

// try {
// 	JSON.parse({"name": "webbrain"})
// } catch(error) {
// 	console.log(error);
// }

//! throw new Error()
// try {
// 	throw new Error("Something went wrong");
// } catch(error) {
// 	console.log(error.message);
// 	console.log(error.name);
// } finally {
// 	console.log("Finished");
// }

// let base = {
//   john: {
//     login: "john",
//     password: 1234,
//   },
//   tom: {
//     login: "tom",
//     password: 4321,
//   },
// };
// console.log("started");
// const login = (login, password) => {
// 	setTimeout(() => {
// 		if(base.login === login && base.password === password) {
// 			console.log("Welcome to profile");
// 		} else console.log("Password or login wrong!");
// 	}, 500)
// }
// login("john", 1234);
// console.log("finished");

//! 1. callback
// console.log("started");
// const login = (login, password, callback) => {
// 	setTimeout(() => {
// 		if(base.login === login && base.password === password) {
// 			console.log("Welcome to profile");
// 		} else console.log("Password or login wrong!");
// 		callback();
// 	}, 500)
// }
// login("john", 1234, () => {
// 	console.log("finished");
// });
//! 2. promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (base.login === "john" && base.password === 134) {
//       resolve("Welcome to profile");
//     } else reject("Password or login wrong!");
//   }, 500);
// });
// console.log("started");
// promise
//   .then((result) => {
// 		console.log(result);
// 		return "webbrain";
// 	})
// 	.then((param) => console.log(param))
//   .catch((error) => console.log(error))
// 	.then((param) => console.log(param))
//   .finally(() => console.log("finished"));
//? promise.all
// const all = Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (base.john.login === "john" && base.john.password === 1234) {
//         resolve("Welcome to profile");
//       } else reject("Password or login wrong!");
//     }, 500);
//   }),
// 	new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (base.tom.login === "tom" && base.tom.password === 4321) {
//         resolve("Welcome to profile");
//       } else reject("Password or login wrong!");
//     }, 500);
//   }),
// ]);
// all.then(res => console.log(res)).catch(error => console.log(error))
//! 3. async await
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (base.login === "john" && base.password === 1234) {
//       resolve("Welcome to profile");
//     } else reject("Password or login wrong!");
//   }, 500);
// });
// const login = async () => {
//   console.log("started");
//   let result;
//   try {
//     result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finished");
//   }
// };
// login();
// async function login() {}

// console.log("started");
// let promise = fetch("https://jsonplaceholder.typicode.com/users");
// promise
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .finally(() => console.log("finished"));

// const getData = async () => {
//   console.log("started");
//   let result = await fetch("https://jsonplaceholder.typicode.com/users");
//   result = await result.json();
//   console.log(result);
//   console.log("finished");
// };
// getData();
