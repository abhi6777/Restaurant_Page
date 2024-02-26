import home from "./initial-page.js";
import menu from "./menu.js";
import about from "./about.js";

const content = document.querySelector("#content");
document.body.style.backgroundColor = "green";

home();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
  home();
});

aboutBtn.addEventListener("click", () => {
  about();
});

menuBtn.addEventListener("click", () => {
  menu();
});
