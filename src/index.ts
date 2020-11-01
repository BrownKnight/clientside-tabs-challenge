import { TabPanel } from "./tabPanel";

function setTabClickEventListener(tabNumber: string) {
  const tabSelectButton: HTMLElement | null = document.getElementById(
    `tab-select-${tabNumber}`
  );
  if (tabSelectButton === null) {
    // TODO throw exception / log error?
    return;
  }
  tabSelectButton.addEventListener("click", showTab.bind(null, tabNumber));
}

function showTab(tabNumber: string) {
  const tabPanels = document.getElementsByClassName("tab-panel");

  // Hide all other tab panels, and show the one specified by removed the hidden class
  for (let tabPanel of tabPanels) {
    if (tabPanel.id === `tab-panel-${tabNumber}`) {
      tabPanel.classList.remove("hidden");
    } else {
      tabPanel.classList.add("hidden");
    }
  }

  // Set the clicked tab button to its active state by adding the class
  const tabButtons = document.getElementsByClassName("tab");
  for (let tabButton of tabButtons) {
    if (tabButton.id === `tab-select-${tabNumber}`) {
      tabButton.classList.add("active");
    } else {
      tabButton.classList.remove("active");
    }
  }
}

// Generate tab panels for the three tabs
const tabPanelContainer = document.getElementById("tab-panels");

const UKNewsTabPanel = new TabPanel(1, true);
const FootballTabPanel = new TabPanel(2, false);
const TravelTabPanel = new TabPanel(2, false);

tabPanelContainer?.appendChild(UKNewsTabPanel);
tabPanelContainer?.appendChild(FootballTabPanel);
tabPanelContainer?.appendChild(TravelTabPanel);

// Setup required function calls when the document is loaded
setTabClickEventListener("1");
setTabClickEventListener("2");
