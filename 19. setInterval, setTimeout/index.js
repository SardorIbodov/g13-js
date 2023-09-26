//! Sinxron va Asinxron
//? sinxron kod
// console.log(1);
// console.log(2);
// console.log(3);

//! setTimeout(function, milliseconds), setInterval(function, milliseconds)
//? callback function(function) {}
// console.log(1);
// setTimeout(() => {
//   console.log(2.1);
// }, 0);
// setTimeout(() => {
//   console.log(2.2);
// }, 1000);
// console.log(3);
// for (let i = 0; i <= 1000; i++) {}
// console.log("tugadi");
// 1 3 tugadi 2.1 2.2

// let time = 0;
// let timer = setInterval(() => {
//   console.log(++time);
//   if (time === 5) {
//     clearInterval(timer);
//   }
// }, 1000);

//? time => seconds
// const timer = (time) => {
//   setInterval(() => {
//     let hours = parseInt(time / 3600);
//     let minutes = parseInt((time - hours * 3600) / 60);
//     let seconds = time - hours * 3600 - minutes * 60;
//     console.log(
//       `${hours >= 10 ? hours : `0${hours}`} : ${
//         minutes >= 10 ? minutes : `0${minutes}`
//       } : ${seconds >= 10 ? seconds : `0${seconds}`}`
//     );
//     time--;
//   }, 1000);
// };
// timer(4 * 3600 + 20 * 60 + 5);
