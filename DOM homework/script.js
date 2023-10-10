const container = document.querySelector(".container");

//! 1 - usul
// const display = (number) => {
//   container.innerHTML = "";
//   for (let i = 1; i <= 100; i++) {
//     const button = document.createElement("button");
//     if (number) {
//       i % number === 0 ? (button.innerText = "*") : (button.innerText = i);
//     } else button.innerText = i;
//     button.style.cssText = `
// 			width: 50px;
// 			height: 50px;
// 		`;
//     container.append(button);
//   }
// };

// display();

// const buttons = document.querySelectorAll("button");
// for (let i = 0; i < 100; i++) {
//   buttons[i].addEventListener("click", (e) => {
//     display(+e.target.innerText);
//   });
// }

//! 2 - usul
// const display = () => {
//   container.innerHTML = "";
//   for (let i = 1; i <= 100; i++) {
//     const button = document.createElement("button");
//     button.innerText = i;
//     button.style.cssText = `
// 			width: 50px;
// 			height: 50px;
// 		`;
//     container.append(button);
//   }
// };
// display();

// const buttons = document.querySelectorAll("button");
// for (let i = 0; i < 100; i++) {
//   buttons[i].addEventListener("click", (e) => {
//     let clickedNumber = e.target.innerText;
//     for (let b of buttons) {
//       if (b.innerText % clickedNumber === 0) b.innerText = "*";
//     }
//   });
// }
