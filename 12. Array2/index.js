//! eval()
// console.log(eval("12/3+4"));

//! filter((value, index, array) => {})
//? 1. Aylanib chiqish
//? 2. Filter qilish (shartga qarab, elementlarni o'chirish)

//? [1,2,3,4,5,6,7,8,9,10] => [2, 4, 6, 8, 10]
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//?
// let result = [];
// for (let item of array) {
//   if (item % 2 === 0) result.push(item);
// }
// console.log(result);
//?
// let newArray = array.filter((v) => v % 2 === 0);
// console.log(array);
// console.log(newArray);

//! sort((a, b) => {})
//? sort((a, b) => a - b) => o'sish tartibi
//? sort((a, b) => b - a) => kamayish tartibi
//? sort((a, b) => a.localeCompare(b)) => a - z
//? sort((a, b) => b.localeCompare(a)) => z - a
// let array = [3, 2, 7, 90, 81];
// let newArray1 = array.sort((a, b) => {
//   return a - b;
// });
// console.log(array);
// console.log(newArray1);
// let newArray2 = array.sort((a, b) => {
//   return b - a;
// });
// let array = [
//   "Hayitmurodov Abror",
//   "Mushtari Zabirova",
//   "Azimov Asadbek",
//   "Nazokat Saidikramova",
// ];
// let newArray = array.sort((a, b) => b.localeCompare(a));
// console.log(newArray);
// let array = [3, 2, 7, 17, 90, 81, 23, 45];
// let newArray = array.sort();
// console.log(newArray);

// let birthYears = [1999, 2000, 2005, 2003, 2001, 1997];
// let newBirthYears = birthYears.sort((a, b) => a - b);
// console.log(newBirthYears);

// const students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];

// let newStudents = students.sort((a, b) => a.name.localeCompare(b.name));
// let newStudents = students.sort((a, b) => a.year - b.year);
// const display = (students) => {
//   list.innerText = "";
//   for (let student of students) {
//     let h1 = document.createElement("h1");
//     h1.innerText = `${student.id} - ${student.name} - ${student.year}`;
//     list.append(h1);
//   }
// };
// display(students);

// const sortByName = (students) => {
//   students = students.sort((a, b) => a.year - b.year);
// };

// sort.addEventListener("click", () => {
//   sortByName(students);

//   display(students);
// });

// let newStudents = students
//   .filter((v) => v.year > 2000)
//   .sort((a, b) => a.year - b.year);
// console.log(newStudents);

//! find((v, i, a) => {})
// [1, ... 10] => [5]
// let array = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 10];
// for (let item of array) {
//   if (item === 5) {
//     console.log("Topdim");
//   }
// }
// let i = 0;
// let searchedItem = array.find(v => {
// 	i++;
// 	return v === 5;
// })
// console.log(searchedItem, `iterator => ${i}`);

//! findIndex((v, i, a) => {})
// let i = 0;
// let searchedItem = array.findIndex((v) => {
//   i++;
//   return v === 5;
// });
// console.log(searchedItem, `iterator => ${i}`);

//! findLastIndex((v, i, a) => {})
// let i = 0;
// let searchedItem = array.findLastIndex((v) => {
//   i++;
//   return v === 5;
// });
// console.log(searchedItem, `iterator => ${i}`);

//! forEach((v, i, a) => {})
// [1, 2, .. 10]
// let sum = 0;
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.forEach((v) => (sum += v));
// console.log(sum);
// console.log(newArray);

//! map((v, i, a) => {})
// [1, ..., 10] => [1, "juft", 3, "juft"]
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.map(v => v % 2 === 0 ? "juft" : v);
// let newArray = array.map((v) => (sum += v));
// console.log(sum);
// console.log(array);
// console.log(newArray);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.map((v) => v * 2);
// console.log(newArray);

//! every(v => {})
// let array = [1, 3, 5, 3, 5, 7, 10];
// let i = 0;
// let result = array.every(v => {
// 	i++;
// 	return v % 2;
// });
// console.log(i);
// 0 => false
// 1 => true
// console.log(result);

//! some(v => {})
// let array = [2, 4, 6, 3, 5, 7, 10];
// let i = 0;
// let result = array.some((v) => {
//   i++;
//   return v % 2;
// });
// console.log(i);

//! fill(element, start, finish)
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.fill("web", 4, 7);
// console.log(newArray);
// console.log(array);

//! copyWithin(start, copyStart, copyEnd)
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.copyWithin(0, 4, 7);
// console.log(newArray);
// console.log(array);

//! flat(count);
// let array = [
//   [1, 2, [3, 4]],
//   [3, 4],
//   [5, 6],
// ]; // [1, 2, 3, 4, 3, 4, 5, 6]
// let newArray = array.flat(4);
// console.log(newArray);

// let array = [[[[[[[[[[[[[[[1]]]]]]]]]]]]]]];
// let newArray = array.flat(Infinity);
// console.log(array);
// console.log(newArray);

//! Array.from(value, callback)
// let string = "salom";
// let array = Array.from(string, (item, index) => item.toUpperCase());
// console.log(array);

//! reduce((c, v) => {}, initial)
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let something = array.reduce((c, v) => {
// 1
// c = 0, v = 1
// return c + v; // 0 + 1, 1 + 2, 3 + 3, 6 + 4
// 2
// c = 1
// v = 2
// 3
// c = 3
// v = 3
// 4
// c = 6
// v = 4
// }, 0);
// console.log(something);
// 1
// c => 0
// v => 1
// 2
// c => returnga qaytgan qiymat
// v => 2
// const countSheeps = (sheep) => sheep.reduce((c, v) => {v ? c + v : c + 0}, 0);

// "ababaa"
// 1
// "ababaa" => "ababaa" => 6
// "ababaa" => "babaa" => 0
// "ababaa" => "abaa" => 3
// "ababaa" => "baa" => 0
// "ababaa" => "aa" => 1
// "ababaa" => "a" => 1

// 2
// "abc" => "abc" => 3 
// "abc" => "bc" => 0 
// "abc" => "c" => 0 