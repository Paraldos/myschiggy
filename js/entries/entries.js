import Entry from "./entry.js";

export default class Entries {
  constructor() {
    this.entries = [
      new Entry("01", new Date("2023-04-12")),
      new Entry("02", new Date("2022-04-12")),
      new Entry("03", new Date("2023-04-03")),
      new Entry("04", new Date("2023-12-11")),
      new Entry("05", new Date("2023-08-04")),
    ];
  }

  sortByDate() {
    this.entries.sort((a, b) => a.date - b.date);
  }
}
