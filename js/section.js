export default class Section {
  constructor(entry) {
    this.entry = entry;
    this.section = this.createHtmlElement();
    this.header = this.section.querySelector(".section__header");
    this.dateInput = this.section.querySelector(".basics__date-input");
    this.headerEvent();
    this.dateEvent();
  }

  createHtmlElement() {
    // create element
    const template = document.querySelector(".section-template");
    const fragment = template.content.cloneNode(true);
    // append element
    document.querySelector("main").appendChild(fragment);
    // get element
    const sections = document.querySelectorAll("section");
    const section = sections[sections.length - 1];
    // return element
    return section;
  }

  headerEvent() {
    this.header.addEventListener("click", () => {
      this.disableAllSections();
      this.section.classList.remove("disabled");
    });
  }

  dateEvent() {
    this.dateInput.addEventListener("change", () => {
      // get current date
      const date = this.dateInput.valueAsNumber;
      // update object
      this.entry.date = date;
      // update display
      this.header.innerText = new Date(date).toLocaleDateString("de-DE");
    });
  }

  disableAllSections() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("disabled");
    });
  }
}
