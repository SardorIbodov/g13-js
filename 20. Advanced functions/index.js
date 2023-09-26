// function sayHello(age, name) {
//   console.log("Hi", this, age, name);
// }
// window.sayHello();
// window.alert("salom");

// let john = {
//   name: "John",
//   age: 25,
//   message: sayHello,
// };

// let tom = {
//   name: "Tom",
//   age: 28,
// };

// john.message();
//! bind() => function
// sayHello()
// sayHello.bind(tom)(tom.age);
// sayHello.bind(tom, tom.age)();
//! call(context, param1, param2, ...)
// sayHello.call(tom, tom.age)
//! apply(context, [param1, param2, param3, ...])
// sayHello.apply(tom, [tom.age, tom.name])

// const showDetail = function () {
//   console.log(this.login, this.password);
// };
// let user1 = {
//   login: "user1",
//   password: "123",
// };
// let user2 = {
//   login: "user2",
//   password: "231",
// };
// let user3 = {
//   login: "user3",
//   password: "321",
// };
// showDetail.call(user1);
// showDetail.call(user2);
// showDetail.call(user3);
