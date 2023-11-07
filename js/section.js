export default class Section {
  constructor(entry) {
    /* ===================== create */
    this.createHtmlElement();
    /* ===================== get variables */
    this.entry = entry;
    this.section = this.getSection();
    this.header = this.section.querySelector(".section__header");
    this.dateInput = this.section.querySelector(".section__date-input");
    this.planedTimeInput = this.section.querySelector(
      ".section__planed-time-input"
    );
    this.breaksInfo = this.section.querySelector(".section__breaks-info");
    this.startBtn = this.section.querySelector(".section__start-btn");
    this.stopBtn = this.section.querySelector(".section__stop-btn");
    /* ===================== */
    this.addOverviewTimes();
    this.updateDate();
    /* ===================== events */
    this.headerEvent();
    this.dateEvent();
    this.startBtnEvent();
    this.stopBtnEvent();
    this.basicsTimeEvent();
  }

  /* ===================== create */
  createHtmlElement() {
    const sectionTemplate = document.querySelector(".section-template");
    const fragment = sectionTemplate.content.cloneNode(true);
    document.querySelector("main").appendChild(fragment);
  }

  /* ===================== get variables */
  getSection() {
    const sections = document.querySelectorAll("section");
    const section = sections[sections.length - 1];
    return section;
  }

  /* ===================== overview */
  addOverviewTimes() {
    const timeTemplate = document.querySelector(".section-template--time");
    console.log(this.entry);
  }

  /* ===================== events */
  headerEvent() {
    this.header.addEventListener("click", () => {
      this.disableAllSections();
      this.section.classList.remove("disabled");
    });
  }

  dateEvent() {
    this.dateInput.addEventListener("change", () => this.updateDate());
  }

  basicsTimeEvent() {
    this.planedTimeInput.addEventListener("change", () => {
      // get current time
      const time = this.planedTimeInput.value;
      // update object
      this.entry.planedTime = time;
      // update display
      this.breaksInfo.innerText = "Give me Text";
    });
  }

  startBtnEvent() {
    this.startBtn.addEventListener("click", () => {
      console.log("start");
    });
  }

  stopBtnEvent() {
    this.stopBtn.addEventListener("click", () => {
      console.log("stop");
    });
  }

  /* ===================== helper */
  disableAllSections() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("disabled");
    });
  }

  updateDate() {
    // get current date
    let date = this.dateInput.valueAsNumber;
    if (!date && this.entry.date) date = this.entry.date;
    // update object
    this.entry.setDate(date);
    // update display
    this.header.innerText = new Date(date).toLocaleDateString("de-DE");
  }
}
