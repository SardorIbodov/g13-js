const box = document.querySelector(".box");
const button = document.querySelector("button");

// button.addEventListener("click", () => {
//? scrollTo/scrollBy(x, y)
//? scrollTo/scrollBy({top: , left:, behavior: smooth})

// box.scrollTo(0, 40);
// box.scrollBy({
// 	top: 40,
// 	behavior: "smooth",
// });
// })

box.addEventListener("scroll", (e) => {
  if (box.scrollHeight - box.offsetHeight - 100 < box.scrollTop) {
    box.innerText += `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eveniet
		veniam nostrum exercitationem corrupti itaque magni, voluptas officiis
		pariatur, sit repudiandae excepturi nesciunt quidem ex, accusamus aut?`;
  }
});
