export class TabPanel extends HTMLOListElement {
  constructor(tabNumber: number, shownAtStart: boolean) {
    super();
    console.log("Creating!")
    this.id = `tab-panel-${tabNumber}}`
    this.classList.add("tab-panel");

    if (!shownAtStart) {
      this.classList.add("hidden");
    }
  }
}
