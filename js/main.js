import Section from "./section.js";

function init() {
  const amountOfSections = localStorage.getItem("amountOfSections");

  for (let i = 0; i < amountOfSections; i++) {
    new Section(i);
  }

  startSection();
}
init();

function startSection() {
  const sections = document.querySelectorAll("section");
  if (sections.length < 1) return;
  console.log(sections.length);
  sections.forEach((section) => {
    section.classList.add("disabled");
  });
  sections[sections.length - 1].classList.remove("disabled");
}
