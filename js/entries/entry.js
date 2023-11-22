export default class Entry {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.planedTime = 0;
    this.overviewStarts = [];
    this.overviewStops = [];
  }

  removeEmptyElementsFromOverviews() {
    this.overviewStarts = this.overviewStarts.filter((el) => el != "");
    this.overviewStops = this.overviewStops.filter((el) => el != "");
  }

  getOverviewsMax() {
    return Math.max(this.overviewStarts.length, this.overviewStops.length);
  }

  sortOverviews() {
    this.removeEmptyElementsFromOverviews();
    this.overviewStarts.sort();
    this.overviewStops.sort();
    for (let i = 0; i < this.getOverviewsMax(); i++) {
      if (this.overviewStarts[i] > this.overviewStops[i]) {
        this.overviewStarts.push("");
        this.overviewStarts.sort();
      }
    }
  }

  calcPauses() {
    console.log("pause");
  }

  calcTotalDriveTime() {
    let timeTotal = 0;
    for (let i = 0; i < this.getOverviewsMax(); i++) {
      if (this.overviewStarts[i] && this.overviewStops[i]) {
        let currentTime = this.overviewStops[i] - this.overviewStarts[i];
        timeTotal += currentTime;
      }
    }
    return timeTotal;
  }

  update() {
    console.log("update");
  }
}
