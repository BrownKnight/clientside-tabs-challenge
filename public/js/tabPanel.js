export class TabPanel {
    constructor(tabNumber, shownAtStart) {
        console.log("Creating!");
        this.element = document.createElement("ol");
        this.element.id = `tab-panel-${tabNumber}`;
        this.element.classList.add("tab-panel");
        if (!shownAtStart) {
            this.element.classList.add("hidden");
        }
    }
}
