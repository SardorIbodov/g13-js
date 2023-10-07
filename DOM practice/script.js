const dropdown = document.querySelector(".dropdown");
const items = document.querySelector(".items");
dropdown.addEventListener("click", () => {
  items.classList.toggle("items-active");
});

import { database } from "./mock.js";
const carouselContent = document.querySelector(".carousel-content");
const dots = document.querySelector(".dots");
const display = () => {
  database.forEach((value, index) => {
    const image = document.createElement("img");
    const dot = document.createElement("span");
    image.src = value.src;
    dot.classList.add("dot");
    if (index === 0) {
      image.classList.add("active-img");
      dot.classList.add("dot-active");
    }
    carouselContent.append(image);
    dots.append(dot);
  });
};
display();

const images = document.querySelectorAll("img");

const nextBtn = document.querySelector("#next");
const next = () => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].getAttribute("class")?.includes("active-img")) {
      images[i].classList.remove("active-img");
      dots.children[i].classList.remove("dot-active");
      if (i !== images.length - 1) {
        images[i + 1].classList.add("active-img");
        dots.children[i + 1].classList.add("dot-active");
      } else {
        images[0].classList.add("active-img");
        dots.children[0].classList.add("dot-active");
      }
      break;
    }
  }
};
nextBtn.addEventListener("click", next);

const prevBtn = document.querySelector("#prev");
const prev = () => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].getAttribute("class")?.includes("active-img")) {
      images[i].classList.remove("active-img");
      dots.children[i].classList.remove("dot-active");
      if (i === 0) {
        images[images.length - 1].classList.add("active-img");
        dots.children[images.length - 1].classList.add("dot-active");
      } else {
        images[i - 1].classList.add("active-img");
        dots.children[i - 1].classList.add("dot-active");
      }
      break;
    }
  }
};
prevBtn.addEventListener("click", prev);

for(let i = 0; i < dots.children.length; i++) {
	dots.children[i].addEventListener("click", () => {
		for(let j = 0; j < images.length; j++) {
			images[j].classList.remove("active-img");
			dots.children[j].classList.remove("dot-active");
		}
		images[i].classList.add("active-img");
		dots.children[i].classList.add("dot-active");
	})
}
