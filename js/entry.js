export default class Entry {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.planedTime = 0;
    this.overviewStarts = [];
    this.overviewStops = [];
  }

  sortOverview() {
    this.overviewStarts = this.overviewStarts.filter((el) => el != "");
    this.overviewStarts.sort();
    this.overviewStops.sort();
    const max = Math.max(this.overviewStarts.length, this.overviewStops.length);
    for (let i = 0; i < max; i++) {
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
    console.log("total drive time");
  }

  update() {
    console.log("update");
  }
}
