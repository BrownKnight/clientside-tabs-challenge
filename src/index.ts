

function setTabClickEventListener(tabNumber: string) {
  const tabSelectButton: HTMLElement | null = document.getElementById(`tab-select-${tabNumber}`);
  if (tabSelectButton === null)  {
    // TODO throw exception / log error?
    return;
  }
  tabSelectButton.addEventListener("click", showTab.bind(null, tabNumber));
}

function showTab(tabNumber: string) {
  const tabPanels = document.getElementsByClassName("tab-panel");
  console.log(`Showing tab ${tabNumber}`)

  for (let tabPanel of tabPanels) {
    if (tabPanel.id === `tab-panel-${tabNumber}`) {
      tabPanel.classList.remove("hidden");
    }
    else {
      tabPanel.classList.add("hidden")
    }
  }
}

// Setup required function calls when the document is loaded
setTabClickEventListener("1");
setTabClickEventListener("2");
