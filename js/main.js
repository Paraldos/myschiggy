import Section from "./section/section.js";
import Entries from "./entries/entries.js";

export default class Main {
  constructor() {
    this.entries = new Entries();
    this.entries.sortByDate();
    this.buildSections();
    this.openStartSection();
  }

  buildSections() {
    this.entries.entries.forEach((entry) => new Section(entry));
  }

  openStartSection() {
    const sections = document.querySelectorAll("section");
    if (sections.length < 1) return;
    sections.forEach((section) => {
      section.classList.add("disabled");
    });
    sections[sections.length - 1].classList.remove("disabled");
  }
}

new Main();
