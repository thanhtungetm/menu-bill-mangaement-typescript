import NavBar from "./components/NavBar";
import { Page } from "./helpers/constant";
import Component from "./interfaces/Component";
import FoodItem from "./model/FoodItem";
import BillManagement from "./pages/BillManagement";
import MenuManagement from "./pages/MenuManagement";
import { tempData } from "./data/tempData";
import Item from "./model/Item";

class App implements Component {
  currentPage: Page = Page.BILL;
  list: Item[] = tempData

  constructor(private element: HTMLElement) {}

  setPage(page: Page) {
    this.currentPage = page;
    console.log("Pg:", page);

    console.log(this);
    
    this.render();
  }

  render(): void {
    console.log("re-render");

    this.element.innerHTML = `
        <div class="sidebar">
        
        </div>
        <div class="main">
        
        </div>
    `;
    new NavBar(document.querySelector(".sidebar") as HTMLElement, {
      setPage: this.setPage.bind(this),
      currentPage: this.currentPage
    }).render();
    const mainElement = document.querySelector(".main") as HTMLElement;

    switch (this.currentPage) {
      case Page.BILL:
        new BillManagement(mainElement, {list: this.list}).render();
        break;
      case Page.MENU:
        new MenuManagement(mainElement).render();
        break;
    }
  }
}
export default App;
