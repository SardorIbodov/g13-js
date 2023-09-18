//! Destructure in Array
// let fruits = ["apple", "banana", "kiwi", "grapes"];
// let [olma, ...qolganlari] = fruits;
// console.log(olma);
// console.log(qolganlari);

// const getData = ({name, age, job}) => {
// 	console.log(`${name} ismli ${job} ${age} yoshda!`);
// };
// getData({name: "Asadbek", age: 18, job: "Programmer"})
// getData({name: "Abror", age: 20, job: "Frontendchi"})

//! JSON => Javascript Object Notation
// const object = {
//   name: "web",
//   age: 14,
//   job: "programmer",
//   isHappy: false,
// };
//? Object => JSON -> JSON.stringify(object, [dependencies array], format)
// const jsonType = JSON.stringify(object, ["name", "job"], 2);
// console.log(jsonType);
//? JSON => Object
// const newObject = JSON.parse(jsonType);
// console.log(newObject);

//! new Date()
// let date = new Date();
//! getFullYear()
// console.log(date.getFullYear());
//! getMonth()
// console.log(date.getMonth());
//! getDay()
// console.log(date.getDay());
//! getDate()
// console.log(date.getDate());
//! getHours()
// console.log(date.getHours());
//! getMinutes(), getSeconds(), getMilliseconds()
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
//! Date.now() => in milleseconds
// console.log(Date.now());

// let months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// const moment = () => {
//   return {
//     format(param) {
//       switch (param) {
//         case "MMMM Do YYYY, h:mm:ss a":
//           console.log(months[new Date().getMonth()]);
//       }
//     },
//   };
// };

// const toZip = (string) => {
//   let result = "";
//   let same = 1;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i + 1]) {
//       same++;
//     } else {
//       result += string[i] + (same !== 1 ? same : "");
//       same = 1;
//     }
//   }
//   return result;
// };
// console.log(toZip("webbraaiiin"));
