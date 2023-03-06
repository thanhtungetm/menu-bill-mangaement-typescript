import { Page } from "../helpers/constant";
import Component from "../interfaces/Component";

class NavBar implements Component {
  constructor(private element: HTMLElement, private props: any) {}

  changePage(page: number) {
    switch (page) {
      case Page.MENU:
        this.props.setPage(Page.MENU);
        break;
      case Page.BILL:
        this.props.setPage(Page.BILL);
        break;
    }
  }

  removeAllActive(list: NodeListOf<HTMLElement>) {
    list.forEach((el) => el.classList.remove("active"));
  }

  render(): void {
    const html = ` 
            <!-- Logo -->
            <div>
                <img src="./src/assets/images/logo.jpg" alt="">
            </div>
        
            <ul class="sidebar__nav my-5">
                <li class="px-4 py-3 " data-page='0'>
                    <i class="bi bi-menu-down"></i>
                    <span class="d-nonr d-md-inline-block px-2">Menu Management</span>
                </li>
                <li class="px-4 py-3" data-page='1' >
                    <i class="bi bi-printer"></i>
                    <span class="d-nonr d-md-inline-block px-2">Bill Management</span>
                </li>
            </ul>
        `;
    this.element.innerHTML = html;
    const navLinks =
      document.querySelectorAll<HTMLElement>(".sidebar__nav > li");

    for (let i = 0; i < navLinks.length; i++) {
      const navEl = navLinks[i];
      const page = Number(navEl.dataset.page);
      if (page === this.props.currentPage) navEl.classList.add("active");
      navEl.onclick = () => {
        this.changePage(page);
        console.log("Change", page);
      };
    }
  }
}
export default NavBar;
