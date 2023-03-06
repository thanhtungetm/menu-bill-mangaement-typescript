import Component from "../interfaces/Component";
import Item from "../model/Item";
import MenuService from "../services/MenuService";

class MenuList implements Component {
  menuService = MenuService;
  constructor(private element: HTMLElement) {}

  createMenuItem(index: number, item: Item): string {
    return `
        <div class="col-sm-12  col-lg-6 col-xxl-4">
            <div class="food-item p-3">
                <div class="food-item__info row">
                    <div class="food-item__info__image col-4">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="food-item__info__desc col-8">
                        <div class="food-name">${item.name}</div>
                        <div class="food-desc">${item.description}</div>
                        <div class="food-price">${item.price}</div>
                    </div>
                </div>
                <div class="food-item__controls">
                    <div class="controls__quantity">
                        <button class="mybtn" data-type='DEC'>-</button>
                        <span data-index=${index}>1</span>
                        <button class="mybtn" data-type='INC'>+</button>
                    </div>
                    <div class="food-item__controls__add-cart">
                        <button
                            class="mybtn mybtn-secondary btn-lg fs-6"
                            data-index='${index}'
                            >Add Bill
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
  }

  increaseQuantity(el: HTMLElement) {
    const value = Number(el.innerText);
    el.innerText = String(value + 1);
  }
  decreaseQuantity(el: HTMLElement) {
    const value = Number(el.innerText);
    if(value>1)
        el.innerText = String(value - 1);
  }

  render(): void {
    const html = MenuService.list.reduce<string>(
      (current, item, index) => current + this.createMenuItem(index, item),
      ""
    );
    this.element.innerHTML = html;

    const addCartBtnList = document.querySelectorAll(
      ".food-item__controls__add-cart > button"
    );

    for (let i = 0; i < addCartBtnList.length; i++) {
      const btn = addCartBtnList[i] as HTMLButtonElement;
      const index = Number(btn.dataset.index);
      btn.onclick = () => {
        btn.classList.remove('mybtn-secondary')
        btn.classList.add('mybtn-primary')
        console.log("Add index =", index);
        console.log("Item:", this.menuService.list[index]);
        console.log("Quantity:", (document.querySelector(`.controls__quantity > span[data-index='${index}']`) as HTMLSpanElement).innerText);
        
      };
    }

    //Change quantity
    const changeQuantityBtnList = document.querySelectorAll(
      ".controls__quantity > button"
    );

    for (let i = 0; i < changeQuantityBtnList.length; i++) {
      const btn = changeQuantityBtnList[i] as HTMLElement;
      const type = btn.dataset.type;

      btn.onclick = () => {
        switch (type) {
          case "DEC":
            this.decreaseQuantity(btn.nextElementSibling as HTMLElement)
            break;
          case "INC":
            this.increaseQuantity(btn.previousElementSibling as HTMLElement)
            break;

          default:
            break;
        }
      };
    }

    console.log("Button", addCartBtnList);
  }
}

export default MenuList;
