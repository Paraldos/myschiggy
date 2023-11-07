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
    this.sectionOverviewHeader = this.section.querySelector(
      ".section__overview--header"
    );
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

  addOverviewTimes() {
    this.entry.sortOverview();
    const max = Math.max(
      this.entry.overviewStarts.length,
      this.entry.overviewStops.length
    );
    if (max <= 0) {
      this.sectionOverviewHeader.classList.add("disabled");
      this.sectionOverview.classList.add("disabled");
      return;
    } else {
      this.sectionOverviewHeader.classList.remove("disabled");
      this.sectionOverview.classList.remove("disabled");
    }
    for (let i = 0; i < max; i++) {
      let tr = document.createElement("tr");
      this.sectionOverview.appendChild(tr);
      this.addOverviewTd(tr, i, "overviewStarts");
      this.addOverviewTd(tr, i, "overviewStops");
    }
  }

  addOverviewTd(tr, i, type) {
    let td = document.createElement("td");
    tr.appendChild(td);
    if (this.entry[type][i] && this.entry[type][i] != "") {
      let clone = this.timeTemplate.content.cloneNode(true);
      td.appendChild(clone);
      td.children[0].value = this.entry[type][i];
      this.overviewTimeEvent(td, i, type);
      this.overviewDeleteEvent(td, i, type);
    }
  }

  overviewTimeEvent(td, i, type) {
    td.children[0].addEventListener("change", (event) => {
      this.entry[type][i] = event.target.value;
      this.entry.update;
      this.sectionOverview.innerHTML = "";
      this.addOverviewTimes();
    });
  }

  overviewDeleteEvent(td, i, type) {
    td.children[1].addEventListener("click", () => {
      this.entry[type].splice(i, 1);
      this.entry.update;
      this.sectionOverview.innerHTML = "";
      this.addOverviewTimes();
    });
  }

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
      this.entry.planedTime = time;
      this.entry.update();
      this.breaksInfo.innerText = "Give me Text";
    });
  }

  startBtnEvent() {
    this.startBtn.addEventListener("click", () => {
      this.entry.overviewStarts.push(this.getCurrentTime());
      this.sectionOverview.innerHTML = "";
      this.addOverviewTimes();
    });
  }

  stopBtnEvent() {
    this.stopBtn.addEventListener("click", () => {
      this.entry.overviewStops.push(this.getCurrentTime());
      this.sectionOverview.innerHTML = "";
      this.addOverviewTimes();
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
    this.header.innerText = new Date(date).toLocaleDateString("de-DE");
    this.entry.date = date;
    this.entry.update();
  }

  getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}
