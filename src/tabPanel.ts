export class TabPanel {
  element: HTMLOListElement;
  constructor(tabNumber: number, shownAtStart: boolean) {
    console.log("Creating!")
    this.element = document.createElement("ol");
    this.element.id = `tab-panel-${tabNumber}`
    this.element.classList.add("tab-panel");

    if (!shownAtStart) {
      this.element.classList.add("hidden");
    }
  }
}
