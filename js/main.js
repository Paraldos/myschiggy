import Section from "./section.js";

let entries = [
  { number: 0, dates: new Date("2023-11-04"), planedTime: 0 },
  { number: 1, dates: new Date("2023-11-05"), planedTime: 0 },
];

function init() {
  const amountOfSections = localStorage.getItem("amountOfSections");
  entries.forEach((entry) => {
    new Section(entry);
  });
  startSection();
}
init();

function startSection() {
  const sections = document.querySelectorAll("section");
  if (sections.length < 1) return;
  // ========================
  sections.forEach((section) => {
    section.classList.add("disabled");
  });
  sections[sections.length - 1].classList.remove("disabled");
}
