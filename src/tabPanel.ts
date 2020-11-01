import { ContentFetch } from "./contentFetch.js";

export class TabPanel {
  element: HTMLOListElement;
  constructor(tabNumber: number, shownAtStart: boolean) {
    console.log("Creating!");
    this.element = document.createElement("ol");
    this.element.id = `tab-panel-${tabNumber}`;
    this.element.classList.add("tab-panel");

    if (!shownAtStart) {
      this.element.classList.add("hidden");
    }
  }

  async loadContent(sectionName: string) {
    const response = await ContentFetch.getMostRecentArticlesForSection(
      sectionName
    );
    console.log(response)

    const articles = response.response.results;

    // TODO: define type of the content API's response, and therefore the article object
    articles.forEach((article: any, index: number) => {
      this.addListItem(index + 1, article.webUrl, article.webTitle);
    });
  }

  addListItem(number: number, url: string, content: string) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");

    const listItemNumber = document.createElement("span");
    listItemNumber.textContent = `${number}`;
    listItem.appendChild(listItemNumber);
    listItem

    const listItemClickableContent = document.createElement("a");
    listItemClickableContent.href = url;
    listItemClickableContent.textContent = content;

    listItem.appendChild(listItemClickableContent);

    this.element.appendChild(listItem);
  }
}
