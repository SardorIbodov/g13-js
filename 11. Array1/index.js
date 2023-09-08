//! Array creation
// let array1 = [1, "2", true]; // l = 3
// let array2 = new Array(2); // l = 2
// let array3 = new Array(2, 3, 4); // l = 3
// let array4 = new Array("2"); // l = 1
//? 1. 1ta parameter
// console.log(array2);
//? 2. 1tadan ortiq parameter
// console.log(array3);
// console.log(array4); ["2"]

//! length
// console.log(array2.length);

//! Accessing
// let array = [2, 4, 6, 8];
//? []
// console.log(array[3]);
//? at
// console.log(array.at(2));
// console.log(array.at(-1));

//! String vs Array
// let array = [1, 2, 3]; // mutable
// let string = "123"; // immutable
// array[1] = "i";
// string[1] = "i";
// console.log(array);
// console.log(string);

//! Adding a new element
// let array = [1,2];
// array[2] = 1;
// console.log(array);
// let array = [];
// array[10] = "a";
// console.log(array);
// console.log(array.length);

//! string => array, array => string
//? split(char)
// let string = "salom1dunyo1xayr";
// let array = string.split("1");
// console.log(array);
//? join(char)
// let array = [1, 2, 3];
// let string = array.join("");
// console.log(string);

//! adding array
//? concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [];
// newArr = newArr.concat(arr1, arr2);
// console.log(newArr);

//! type
//? Array.isArray(test)
// console.log(Array.isArray("salom"));
// console.log(Array.isArray([1, 2]));

//! comparison
// console.log([] == 0); // t
// console.log("" == 0); // t
// console.log({} == 0); // f

//! loops
// let arr = [2, 4, 6, 8, 10];
// for(let item of arr) {
// 	console.log(item);
// }
// for(let item in arr) {
// 	console.log(item);
// }

//! Methods
// let arr = [1, 3, 5, 7];
//? push(items)
// arr.push(9, 11);
// console.log(arr);
//? unshift(items)
// arr.unshift(0);
// console.log(arr);
//? pop()
// arr.pop();
// console.log(arr);
//? shift()
// arr.shift();
// console.log(arr);

//! indexOf, lastIndexOf
// let array = ["frontend", "backend", "mobile", "frontend"];
// console.log(array.indexOf("frontend", 1));
// console.log(array.lastIndexOf("frontend"));

//! "salom" => "molas"
//! reverse()
// const stringReverse = (string) => {
// let result = "";
// for(let i = string.length - 1; i >= 0; i--) {
// 	result += string[i];
// }
// return result;
// return string.split("").reverse().join("");
// }
// console.log(stringReverse("salom"));;

//! includes
// let array = [1,2,3];
// console.log(array.includes(1));

//!
// let arr = [1, 2, 3, 4, 5, 6];
//? slice(start, finish)
// let newArr = arr.slice(2, 4);
// let result = [];
// for(let i = 0; i < arr.length; i++) {
// 	if(!newArr.includes(arr[i])) result.push(arr[i]);
// }
// console.log(result);
//? splice(start, deleteCount, newElem)
// arr.splice(2, 2, "uch", "to'rt", "besh");
// console.log(arr);

// spread
// let newArr = [...arr, 7, 8];
// console.log(newArr);

// const dominator = (arr) => {
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//     result[arr[i]] ? result[arr[i]]++ : (result[arr[i]] = 1);
//   }
// 	for(let key in result) {
// 		if(result[key] > arr.length / 2) return +key;
// 	}
//   return -1;
// };
// console.log(dominator([1,2,3,4,5]));
