const forms = document.forms;
const signin = forms[0];
const elementSignin = signin.elements;

const loginInput = elementSignin.loginInput;
loginInput.addEventListener("input", (e) => console.log(e.target.value));

const passwordInput = elementSignin.passwordInput;
passwordInput.addEventListener("input", (e) => console.log(e.target.value));

const language = elementSignin.language;
const greeting = document.querySelector("#greeting");
language.addEventListener("input", (e) => {
  switch (e.target.value) {
    case "uz":
      greeting.innerText = "Salom, xush kelibsiz!";
      break;
    case "ru":
      greeting.innerText = "Привет, добро пожаловать!";
      break;
    case "en":
      greeting.innerText = "Hello, welcome!";
      break;
  }
});

const agree = elementSignin.checkbox;
agree.addEventListener("input", (e) => console.log(agree.checked));

const height = elementSignin.height;
const result = document.querySelector("#result");
result.innerText = height.value;
height.addEventListener("input", (e) => (result.innerText = e.target.value));
