import Component from '../interfaces/Component'
import Item from '../model/Item'
import MenuService from '../services/MenuService'
import MenuItem from './MenuItem'

class MenuList implements Component {
    menuService = MenuService
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
    `
    }

   

    render(): void {
        // const html = MenuService.list.reduce<string>(
        //     (current, item, index) => current + this.createMenuItem(index, item),
        //     ''
        // )

        for (let i = 0; i < MenuService.list.length; i++) {
            const item = MenuService.list[i]
            const itemContainner = document.createElement('div')
            itemContainner.classList.add(`list-item-${i}`)
            this.element.appendChild(itemContainner)
            new MenuItem(document.querySelector(`.list-item-${i}`) as HTMLElement, {
                item,
                index: i,
            }).render()
        }
    }
}

export default MenuList
