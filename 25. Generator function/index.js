//! Syntax, yield vs return
// function* generator() {

// }
// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// 	return "tugadi!"
//   yield 4;
//   yield 5;
// }
// let gn = generator();
// console.log(gn);
// console.log(gn.next());
// console.log(gn.next());
// console.log(gn.next());
// console.log(gn.next());
// console.log(gn.next());
// console.log(gn.next());

// let students = [
//   { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//   { id: 2, year: 2000, name: "Asilbek Tolipov" },
//   { id: 3, year: 2002, name: "Najmiddin Nazarov" },
//   { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   { id: 5, year: 1995, name: "Sardor Tursunboyev" },
//   { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra" },
//   { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//   { id: 8, year: 2002, name: "Shukurov Shohruh" },
// ];

// function* idGenerator() {
//   let id = students.length + 10;
//   while (true) {
// 		if(id >= 100) break;
//     yield ++id;
//   }
	
// }
// let gn = idGenerator();

//! loop
// for (let vl of gn) {
//   console.log(vl);
// }

// gn.next();
// gn.next();
// gn.next();
// gn.next();
// const deleteUser = (id) => {
//   students = students.filter((v) => v.id !== id);
// };
// const createUser = (newUser) => {
//   students = [...students, { id: gn.next().value, ...newUser }];
// };
// console.log(students);
// deleteUser(6);
// console.log(students);
// createUser({ year: 2006, name: "Tom" });
// createUser({ year: 2008, name: "John" });
// deleteUser(5);
// console.log(students);

// let gn2 = idGenerator();
// console.log(gn2.next());
