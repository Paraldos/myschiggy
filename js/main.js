import Section from "./section/section.js";
import Entry from "./entry/entry.js";

export default class Main {
  constructor() {
    this.entries = [
      new Entry("01", new Date("2023-04-12")),
      new Entry("02", new Date("2022-04-12")),
      new Entry("03", new Date("2023-04-03")),
      new Entry("04", new Date("2023-12-11")),
      new Entry("05", new Date("2023-08-04")),
    ];
    this.sortEntries();
    this.buildSections();
    this.declareStartSection();
  }

  sortEntries() {
    this.entries.sort((a, b) => a.date - b.date);
  }

  buildSections() {
    this.entries.forEach((entry) => new Section(entry));
  }

  declareStartSection() {
    const sections = document.querySelectorAll("section");
    if (sections.length < 1) return;
    // ========================
    sections.forEach((section) => {
      section.classList.add("disabled");
    });
    sections[sections.length - 1].classList.remove("disabled");
  }
}

new Main();
