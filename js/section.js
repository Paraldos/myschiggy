export default class Section {
  constructor(entry) {
    this.entry = entry;
    this.createHtmlElement();
    /* ===================== */
    this.section = this.getSection();
    this.header = this.section.querySelector(".section__header");
    this.dateInput = this.section.querySelector(".section__input--date");
    this.planedTimeInput = this.section.querySelector(
      ".section__input--planed-time"
    );
    this.breaksInfo = this.section.querySelector(".section__breaks-info");
    this.startBtn = this.section.querySelector(".section__start-btn");
    this.stopBtn = this.section.querySelector(".section__stop-btn");
    /* ===================== */
    this.addOverviewTimes();
    /* ===================== */
    this.headerEvent();
    this.dateEvent();
    this.startBtnEvent();
    this.stopBtnEvent();
    this.basicsTimeEvent();
  }

  createHtmlElement() {
    const sectionTemplate = document.querySelector(".section-template");
    const fragment = sectionTemplate.content.cloneNode(true);
    document.querySelector("main").appendChild(fragment);
  }

  addOverviewTimes() {
    const timeTemplate = document.querySelector(".section-template--time");
  }

  getSection() {
    const sections = document.querySelectorAll("section");
    const section = sections[sections.length - 1];
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
      const time = this.planedTimeInput.value;
      // update object
      this.entry.planedTime = time;
      // update display
      this.breaksInfo.innerText = "Blub";
      console.log(time);
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

  disableAllSections() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("disabled");
    });
  }
}
