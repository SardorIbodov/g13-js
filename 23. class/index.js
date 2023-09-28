// let person = {
// 	name: 'John',
// 	age: 20,
// 	height: 130,
// 	weight: 70,
// 	get isHealthy() {
// 		return this.height / this.weight > 2 ? "Sog'lom" : "Kasal";
// 	},
// 	getData: () => {

// 	}
// }
// console.log(person.isHealthy);

//! instance of
// console.log([]);
// console.log(function getData(){} instanceof Object);

//! class
// class Person {
// 	sayHi() {
// 		console.log("sayHi yurdi");
// 	}
// 	constructor(firstName, age) {
// 		this.name = firstName;
// 		this.age = age;
// 		console.log("constructor yurdi");
// 	}
// }
// let john = new Person("john", 25);
// john.sayHi()
// console.log(john);
// console.log(john);
// console.log(john instanceof Person);
// john.calculate();
// let human = new Person();
// console.log(human);
// let obj = new Object();
// console.log(obj);
// let arr = new Array(1,2,3);
// console.log(arr);
// console.log(john === human);

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   voice() {
//     console.log(`This is ${this.name}'s voice`);
//   }
// }
// let dog = new Animal("kuchuk", 5);
// console.log(dog);
// dog.voice();
// let cat = new Animal("mushuk", 2);
// console.log(cat);
// cat.voice();

//! getter, setter
// class User {
// 	#password = 2023;
// 	constructor(login) {
// 		this.login = login;
// 		this.#getInfo()
// 	}
// 	#getInfo() {
// 		console.log("Private function");
// 	}
// 	get password() {
// 		this.#getInfo()
// 		console.log(this.#password);
// 	}
// 	set password(newPassword) {
// 		this.#password = newPassword;
// 	}
// }
// let user1 = new User("user1");
// user1.password
// user1.password;
// user1.password = 1234;
// user1.password;
// console.log(user1);
// user1.#getInfo()

//! inheritance
// class Animal {
// 	hasTail = false;
// 	constructor(age) {
// 		this.age = age;
// 	}
// 	voice() {
// 		console.log("this is my voice");
// 	} 
// }
// class Cat extends Animal {
// 	constructor(age, color) {
// 		super(age);
// 		this.color = color;
// 	}
// 	voice() {
// 		console.log("I say meow");
// 	}
// };
// let cat = new Cat(5, "white");
// console.log(cat);
// cat.voice();

// class MyArray extends Array {};
// let myArray = new MyArray();
// console.log(myArray);
// myArray.push("1");
// console.log(myArray);

// class MyArray extends Array {
// 	push(num) {
// 		console.log("Pushni o'zgartirdik", num);
// 	}
// };
// let myArray = new MyArray();
// myArray.__proto__.push(1);
// console.log(myArray);

//! static variable, static function
// class Person {
//   name = "John";
// 	static age = 25;
//   calculateBirthYear() {
// 		console.log(2023 - Person.age);
// 	}
// }
// let user1 = new Person();
// user1.calculateBirthYear();
// Person.calculateBirthYear();