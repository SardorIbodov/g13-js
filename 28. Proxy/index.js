//! Syntax
let user = {
  login: "user1",
  _password: 1234,
  _desc: "premium",
  name: "John",
};
//! Reflect
// console.log(Reflect.get(user, "_desc"));
// Reflect.set(user, "login", "USER1");
// console.log(user);
// Reflect.deleteProperty(user, "login");

user = new Proxy(user, {
  get(target, prop) {
    // return prop === "password" ? "You cannot access!" : target[prop];
    return prop === "password"
      ? "You cannot access!"
      : Reflect.get(target, prop);
  },
  set(target, prop, newValue) {
    if (prop === "_password") throw new Error("You cannot change password");
    // else target[prop] = newValue;
		else Reflect.set(target, prop, newValue);
  },
  deleteProperty(target, prop) {
    if (prop === "_desc") throw new Error("You cannot delete description");
    // else delete target[prop];
		else Reflect.deleteProperty(target, prop);
  },
  ownKeys(target) {
    return Object.keys(target).filter((v) => !v.startsWith("_"));
  },
  has(target, prop) {
    // return !prop.startsWith("_") && target[prop];
    return !prop.startsWith("_") && Reflect.get(target, prop);
  },
});
// console.log("login" in user);
// console.log("_password" in user);
// console.log("age" in user);

// for(let key in user) {
// 	console.log(key);
// }
// delete user._desc;
// console.log(user);

// user.login = "user";
// user._password = 4321;
// user.name = "John";
// console.log(user);
// console.log(user.login);
// console.log(user.password);
// console.log(user.desc);

// let {login, password, desc} = user;
// console.log(login);
// console.log(password);
// console.log(desc);

// let numbers = [1, 3, 5, 7];
// numbers = new Proxy(numbers, {
//   set(target, prop, newValue) {
//     if (newValue % 2 === 0) throw new Error("Faqat toq son qo'shish mumkin!");
//     else {target[prop] = newValue};
// 		return true;
//   },
// });
// numbers[4] = 9;
// numbers.push(11);
// console.log(numbers);
