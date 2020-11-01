var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ContentFetch } from "./contentFetch.js";
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
    loadContent(sectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield ContentFetch.getMostRecentArticlesForSection(sectionName);
            console.log(response);
            const articles = response.response.results;
            // TODO: define type of the content API's response, and therefore the article object
            articles.forEach((article, index) => {
                this.addListItem(index + 1, article.webUrl, article.webTitle);
            });
        });
    }
    addListItem(number, url, content) {
        const listItem = document.createElement("li");
        listItem.classList.add("list-item");
        const listItemNumber = document.createElement("span");
        listItemNumber.textContent = `${number}`;
        listItem.appendChild(listItemNumber);
        listItem;
        const listItemClickableContent = document.createElement("a");
        listItemClickableContent.href = url;
        listItemClickableContent.textContent = content;
        listItem.appendChild(listItemClickableContent);
        this.element.appendChild(listItem);
    }
}
