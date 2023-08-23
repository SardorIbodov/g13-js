//! If-else => Shart operatori
//?
// const age = 18;
// console.log("Dastur boshlandi");
// if(age >= 18) {
// 	console.log("Saylash huquqiga ega");
// } else {
// 	console.log("Saylash mumkin emas!");
// }
// console.log("Dastur tugadi");
//? Combination => 2ta yoki undan ortiq shartlar, ichma-ich if lar
// let age = 17;
// if(age >= 16 && age >= 18) {
// 	console.log("Passport va prava olish mumkin");
// } else if(age >= 16 && age < 18) {
// 	console.log("Faqat passport olish mumkin");
// } else {
// 	console.log("Passport va prava olish mumkin emas");
// }
//? Juft yoki toqlikklar tekshirish
// let son = 21;
// if(son % 2 === 0) {
// 	console.log("Juft son");
// } else {
// 	console.log("Toq son");
// }
//? Baholash tizimi
// let grade = "23";
// if (typeof grade === "number") {
//   if (grade >= 90 && grade <= 100) {
//     console.log("A'lo");
//   } else if (grade < 90 && grade >= 70) {
//     console.log("Yaxshi");
//   } else if (grade < 70 && grade >= 60) {
//     console.log("Qoniqarli");
//   } else if (grade < 60 && grade >= 0) {
//     console.log("Qoniqarsiz");
//   } else {
//     console.log("Noto'g'ri ma'lumot kiritilgan!");
//   }
// } else {
// 	console.log("Raqam kiriting!");
// }

//? 2ta sondan kattasini aniqlash
// let a = 21, b = 21;
// if(a > b) {
// 	console.log(`a = ${a} soni b = ${b} sonidan katta`);
// } else if(a < b) {
// 	console.log(`a = ${a} soni b = ${b} sonidan kichik`);
// } else {
// 	console.log("sonlar teng");
// }

//! Ternary operators
// const age = 18;
// if(age >= 18) {
// 	console.log("Saylash huquqiga ega");
// } else {
// 	console.log("Saylash mumkin emas!");
// }
// age >= 18
//   ? console.log("Saylash huquqiga ega")
//   : console.log("Saylash mumkin emas!");

//! Nullish operator
// ?? => null, undefined
// console.log(null ?? undefined);
