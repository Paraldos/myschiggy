export default class Section {
  constructor(i) {
    this.template = document.querySelector(".section-template");
    this.section = this.createNewHtmlElement();
    this.header = this.section.querySelector(".section__header");
    this.dateInput = this.section.querySelector(".basics__date-input");
    this.addHeaderEvent();
    this.addDateEvent();
  }

  createNewHtmlElement() {
    const fragment = this.template.content.cloneNode(true);
    document.querySelector("main").appendChild(fragment);
    const sections = document.querySelectorAll("section");
    const section = sections[sections.length - 1];
    return section;
  }

  addHeaderEvent() {
    this.header.addEventListener("click", () => {
      this.disableAllSections();
      this.section.classList.remove("disabled");
    });
  }

  addDateEvent() {
    this.dateInput.addEventListener("change", () => {
      const date = this.dateInput.valueAsNumber;
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
