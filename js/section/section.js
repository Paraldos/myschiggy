import Overview from "./overview.js";
import Header from "./header.js";

export default class Section {
  constructor(entry) {
    this.entry = entry;
    this.createHtmlElement();
    this.section = this.getSection();
    this.dateInput = this.section.querySelector(".section__date-input");
    this.planedTimeInput = this.section.querySelector(
      ".section__planed-time-input"
    );
    this.breaksInfo = this.section.querySelector(".section__breaks-info");
    this.startBtn = this.section.querySelector(".section__start-btn");
    this.stopBtn = this.section.querySelector(".section__stop-btn");
    /* ===================== */
    this.header = new Header(this.section);
    new Overview(entry, this.section);
    this.updateDate();
    /* ===================== events */
    this.dateInputEvent();
    this.planedTimeInputEvent();
    this.startBtnEvent();
    this.stopBtnEvent();
  }

  createHtmlElement() {
    const sectionTemplate = document.querySelector(".section-template");
    const fragment = sectionTemplate.content.cloneNode(true);
    document.querySelector("main").appendChild(fragment);
  }

  getSection() {
    const sections = document.querySelectorAll("section");
    const section = sections[sections.length - 1];
    return section;
  }

  dateInputEvent() {
    this.dateInput.addEventListener("change", () => this.updateDate());
  }

  planedTimeInputEvent() {
    this.planedTimeInput.addEventListener("input", () => {
      const time = this.planedTimeInput.value;
      this.entry.planedTime = time;
      this.entry.update();
      this.breaksInfo.innerText = "Give me Text";
    });
  }

  startBtnEvent() {
    this.startBtn.addEventListener("click", () => {
      this.entry.overviewStarts.push(this.getCurrentTime());
      new Overview(this.entry, this.section);
    });
  }

  stopBtnEvent() {
    this.stopBtn.addEventListener("click", () => {
      this.entry.overviewStops.push(this.getCurrentTime());
      new Overview(this.entry, this.section);
    });
  }

  /* ===================== helper */
  updateDate() {
    let date = this.dateInput.valueAsNumber;
    if (!date && this.entry.date) {
      date = this.entry.date;
      this.dateInput.valueAsNumber = date;
    } else {
      this.entry.date = date;
      this.entry.update();
    }
    this.header.changeText(new Date(date).toLocaleDateString("de-DE"));
  }

  getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}
