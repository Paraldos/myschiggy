export default class Section {
  constructor(entry) {
    this.entry = entry;
    this.section = this.createHtmlElement();
    this.header = this.section.querySelector(".section__header");
    this.dateInput = this.section.querySelector(".section__input--date");
    this.planedTimeInput = this.section.querySelector(
      ".section__input--planed-time"
    );
    this.breaksInfo = this.section.querySelector(".section__breaks-info");
    this.headerEvent();
    this.dateEvent();
    this.basicsTimeEvent();
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

  basicsTimeEvent() {
    this.planedTimeInput.addEventListener("change", () => {
      // get current time
      const time = this.planedTimeInput.valueAsNumber;
      // update object
      this.entry.planedTime = time;
      // update display
      this.breaksInfo.innerText = "Blub";
    });
  }

  disableAllSections() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("disabled");
    });
  }
}
