let amountOfSections = 3;

class section {
  constructor() {
    this.template = document.querySelector(".section-template");
    this.section = this.createNewHtmlElement();
    this.header = this.section.querySelector(".section__header");
    this.dateInput = this.section.querySelector(".section__date-input");
    // this.addHeaderEvent();
    // this.addDateEvent();
  }

  createNewHtmlElement() {
    const fragment = this.template.content.cloneNode(true);
    document.querySelector("body").appendChild(fragment);
    const sections = document.querySelectorAll("section");
    const section = sections[sections.length - 1];
    return section;
  }

  addHeaderEvent() {
    this.header.addEventListener("click", () => {
      disableAllSections();
      this.section.classList.remove("disabled");
    });
  }

  addDateEvent() {
    this.dateInput.addEventListener("change", () => {
      const date = this.dateInput.valueAsNumber;
      this.header.innerText = new Date(date).toLocaleDateString("de-DE");
    });
  }
}

function init() {
  for (let i = 0; i < amountOfSections; i++) {
    new section();
  }
  disableAllSections();
  enableLastSection();
}
init();

function disableAllSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("disabled");
  });
}

function enableLastSection() {
  const sections = document.querySelectorAll("section");
  sections[sections.length - 1].classList.remove("disabled");
}
