export default class Header {
  constructor(section) {
    this.section = section;
    this.header = this.section.querySelector(".section__header");
    this.headerEvent();
  }

  headerEvent() {
    this.header.addEventListener("click", () => {
      this.disableAllSections();
      this.section.classList.remove("disabled");
    });
  }

  changeText(txt) {
    this.header.innerText = txt;
  }

  disableAllSections() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => section.classList.add("disabled"));
  }
}
