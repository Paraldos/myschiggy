export default class Section {
  constructor(entry) {
    /* ===================== create */
    this.createHtmlElement();
    /* ===================== get variables */
    this.entry = entry;
    this.section = this.getSection();
    this.timeTemplate = document.querySelector(".section-template--time");
    this.header = this.section.querySelector(".section__header");
    this.dateInput = this.section.querySelector(".section__date-input");
    this.planedTimeInput = this.section.querySelector(
      ".section__planed-time-input"
    );
    this.breaksInfo = this.section.querySelector(".section__breaks-info");
    this.sectionOverview = this.section.querySelector(".section__overview");
    this.startBtn = this.section.querySelector(".section__start-btn");
    this.stopBtn = this.section.querySelector(".section__stop-btn");
    /* ===================== */
    this.addOverviewTimes();
    this.updateDate();
    /* ===================== events */
    this.headerEvent();
    this.dateInputEvent();
    this.planedTimeInputEvent();
    this.startBtnEvent();
    this.stopBtnEvent();
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
    this.entry.sortOverview();
    const max = Math.max(
      this.entry.overviewStarts.length,
      this.entry.overviewStops.length
    );
    if (max <= 0) {
      this.sectionOverview.classList.add("disabled");
      return;
    }

    for (let i = 0; i < max; i++) {
      let tr = document.createElement("tr");
      this.sectionOverview.appendChild(tr);
      this.addOverviewTd(tr, i, "overviewStarts");
      this.addOverviewTd(tr, i, "overviewStops");
    }
  }

  addOverviewTd(tr, i, blub) {
    let td = document.createElement("td");
    tr.appendChild(td);
    if (this.entry[blub][i]) {
      let clone = this.timeTemplate.content.cloneNode(true);
      td.appendChild(clone);
      td.children[0].value = this.entry[blub][i];
    }
  }

  /* ===================== events */
  headerEvent() {
    this.header.addEventListener("click", () => {
      this.disableAllSections();
      this.section.classList.remove("disabled");
    });
  }

  dateInputEvent() {
    this.dateInput.addEventListener("change", () => this.updateDate());
  }

  planedTimeInputEvent() {
    this.planedTimeInput.addEventListener("input", () => {
      const time = this.planedTimeInput.value;
      this.entry.setPlanedTime(time);
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
    let date = this.dateInput.valueAsNumber;
    if (!date && this.entry.date) date = this.entry.date;
    this.entry.setDate(date);
    this.header.innerText = new Date(date).toLocaleDateString("de-DE");
  }
}
