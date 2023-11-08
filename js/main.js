import Section from "./section/section.js";
import Entry from "./entry.js";

let entries = [new Entry("01")];

function init() {
  const amountOfSections = localStorage.getItem("amountOfSections");
  entries.forEach((entry) => new Section(entry));
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
