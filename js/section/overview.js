export default class Overview {
  constructor(entry, section) {
    this.entry = entry;
    this.section = section;
    this.overview = this.section.querySelector(".section__overview");
    this.overviewHeader = this.section.querySelector(
      ".section__overview--header"
    );
    this.timeTemplate = document.querySelector(".section-template--time");
    /* ===================== */
    this.updateTable();
  }

  updateTable() {
    this.cleanTable();
    this.fillTable();
  }

  cleanTable() {
    this.overview.innerHTML = "";
  }

  fillTable() {
    this.entry.sortOverviews();
    const max = Math.max(
      this.entry.overviewStarts.length,
      this.entry.overviewStops.length
    );
    if (max <= 0) {
      this.overviewHeader.classList.add("disabled");
      this.overview.classList.add("disabled");
      return;
    } else {
      this.overviewHeader.classList.remove("disabled");
      this.overview.classList.remove("disabled");
    }
    for (let i = 0; i < max; i++) {
      let tr = document.createElement("tr");
      this.overview.appendChild(tr);
      this.addTd(tr, i, "overviewStarts");
      this.addTd(tr, i, "overviewStops");
    }
  }

  addTd(tr, i, type) {
    let td = document.createElement("td");
    tr.appendChild(td);
    if (this.entry[type][i] && this.entry[type][i] != "") {
      let clone = this.timeTemplate.content.cloneNode(true);
      td.appendChild(clone);
      td.children[0].value = this.entry[type][i];
      this.timeEvent(td, i, type);
      this.deleteEvent(td, i, type);
    }
  }

  timeEvent(td, i, type) {
    td.children[0].addEventListener("change", (event) => {
      this.entry[type][i] = event.target.value;
      this.entry.update;
      this.updateTable();
    });
  }

  deleteEvent(td, i, type) {
    td.children[1].addEventListener("click", () => {
      this.entry[type].splice(i, 1);
      this.entry.update;
      this.updateTable();
    });
  }
}
