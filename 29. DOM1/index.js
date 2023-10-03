//! DOM => Document Object Model
//! BOM => Brauser Object Model

//! Selectors
//? tagName
// const titles = document.getElementsByTagName("h1");
// console.log(titles);
// console.log(titles[0]);
// console.log(titles[1]);
//? class
// const title = document.getElementsByClassName("first");
// console.log(title);
//? id
// const title = document.getElementById("title");
// console.log(title);
//? querySelector | querySelectorAll
// const title = document.querySelector("div>h1:first-child");
// console.log(title);

//! Parent-child relationship
// const menu = document.querySelector(".list");
// console.log(menu);
//! children
// console.log(menu.children);
// console.log(menu.childNodes);
//! sibling
// let thirdLi = menu.children[2];
// let fourthLi = thirdLi.nextElementSibling;
// let node = thirdLi.nextSibling;
// console.log(node);
// let secondLi = thirdLi.previousElementSibling;
// let parent = thirdLi.parentElement;
// console.log(parent);
// console.log(
//   document.body.firstElementChild.firstElementChild.nextElementSibling
// );

//! innerText, innerHTML, textContent, outerHTML
// const menu = document.querySelector(".list");
// console.log(menu.innerHTML);
// menu.innerHTML += "<a href='#'>Salom</a>";
// console.log(menu.innerText);
// console.log(menu.textContent);
// console.log(menu.outerHTML);
// menu.outerHTML = 1;
// console.log(menu);

//! hidden
// menu.firstElementChild.hidden = true;
