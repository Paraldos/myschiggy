export default class Entry {
  constructor(name) {
    this.name = name;
    this.date = new Date();
    this.planedTime = 0;
    this.overviewStarts = ["08:00"];
    this.overviewStops = [];
  }

  sortOverview() {
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

  setDate(date) {
    this.date = date;
  }

  setPlanedTime(planedTime) {
    this.planedTime = planedTime;
  }
}
