//! Attribute manipulation
// const input = document.querySelector("input");
//? getAttribute(attributeName)
// console.log(input.getAttribute("type"));
//? setAttribute(attributeName, value)
// input.setAttribute("class", "login");
// input.setAttribute("type", "password");
// input.setAttribute("placeholder", "Type password");
//? hasAttribute(attributeName)
// console.log(input.hasAttribute("placeholder"));
//? removeAttribute
// input.removeAttribute("placeholder");

//! Creating an element
// const body = document.querySelector("body");
// const container = document.createElement("div");
// const wrapper = document.querySelector(".wrapper");
// container.setAttribute("class", "login");
// body.prepend(container)
// body.append(container);
// wrapper.prepend(container);
// wrapper.append(container);
// wrapper.before(container);
// wrapper.after(container);

//! Styling with JS
//? style
// wrapper.style.border = "1px solid red";
// wrapper.style.backgroundColor = "yellow";
// wrapper.style.borderRadius = "5%";
//? cssText
// wrapper.style.cssText = `
// 	border: 1px solid red;
// 	background-color: yellow;
// 	borderRadius: 5%;
// `;

//! Classlist
//? add
//? remove
//? toggle
// wrapper.setAttribute("class", "box");
// wrapper.classList.add("box");
// wrapper.classList.remove("wrapper");
// wrapper.classList.toggle("wrapper");
// wrapper.classList.toggle("box");

//! Clone
// const copyWrapper = wrapper.cloneNode(true);
// console.log(wrapper);
// console.log(copyWrapper);

//! Geometry
//? offsetWidth
//? offsetHeight
//? clientWidth
//? clientHeight
// console.log(wrapper.offsetWidth);
// console.log(wrapper.offsetHeight);
// console.log(wrapper.clientWidth);
// console.log(wrapper.clientHeight);
// console.log(wrapper.scrollHeight);
// console.log(wrapper.scrollWidth);
//? getBoundingClientRect
// console.log(wrapper.getBoundingClientRect());
