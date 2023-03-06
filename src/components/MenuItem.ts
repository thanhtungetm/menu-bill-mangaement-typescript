import Component from '../interfaces/Component'
import Item from '../model/Item'

class MenuItem implements Component {
    private item: Item
    private index: number
    private isOrdered : boolean = false
    private quantity :number = 1
    
    constructor(private element: HTMLElement, props: any) {
        this.item = props.item
        this.index = props.index
    }

    addCart(){
        if(this.isOrdered)  return
        console.log('add cart', this.item);
        this.isOrdered = true
        this.render()
    }
    removeCart(){
        
        console.log('remove cart', this.item);
        this.isOrdered = false
        this.render()
    }

    increaseQuantity() {
        this.quantity++
        this.render()
    }
    decreaseQuantity() {
        this.quantity--
        this.render()
    }

    render(): void {
        const html = `
        <div class="list-item-${this.index} col-sm-12  col-lg-6 col-xxl-4">
            <div class="food-item p-3">
                <div class="food-item__info row">
                    <div class="food-item__info__image col-4">
                        <img src="${this.item.image}" alt="">
                    </div>
                    <div class="food-item__info__desc col-8">
                        <div class="food-name">${this.item.name}</div>
                        <div class="food-desc">${this.item.description}</div>
                        <div class="food-price">${this.item.price}</div>
                    </div>
                </div>
                <div class="food-item__controls">
                    <div class="controls__quantity"">
                        <button class="mybtn" data-type='DEC-${this.index}'>-</button>
                        <span data-index=${this.index}>1</span>
                        <button class="mybtn" data-type='INC-${this.index}'>+</button>
                    </div>
                    <div class="food-item__controls__add-cart d-flex align-items-center gap-1">
                        <button
                            class="mybtn ${this.isOrdered ? 'mybtn-primary disabled': 'mybtn-secondary'} btn-lg fs-6"
                            
                            data-index='${this.index}'
                            >Add Order
                        </button>

                        ${this.isOrdered ? `<div class='remove-cart' data-index='${this.index}'><i class="bi bi-x-circle fs-4"></i></div>` :''}
                    </div>
                </div>
            </div>
        </div> 
        `
        console.log(typeof this.element.parentNode, this.isOrdered);
        if(this.element.parentNode){
            this.element.outerHTML = html
            this.element = document.querySelector(`.list-item-${this.index}`) as HTMLElement
        }else{
            this.element.innerHTML = 'html'
            console.log("in",this.element);
        }
        

        const decreaseBtn = document.querySelector(`button[data-type='DEC-${this.index}']`) as HTMLElement
        const increaseBtn = document.querySelector(`button[data-type='INC-${this.index}']`) as HTMLElement
        const quantityField = document.querySelector(`span[data-index='${this.index}']`) as HTMLElement

        const addCartBtn = document.querySelector(`.food-item__controls__add-cart > button[data-index='${this.index}']`) as HTMLButtonElement
        const removeCart = document.querySelector(`.remove-cart[data-index='${this.index}']`) as HTMLElement

        quantityField.innerText = String(this.quantity)
        decreaseBtn.onclick = ()=>{
            this.decreaseQuantity()
            
        }
        increaseBtn.onclick = ()=>{
            this.increaseQuantity()
        }

        addCartBtn.onclick = this.addCart.bind(this)
        removeCart&&(removeCart.onclick = this.removeCart.bind(this))
    }
}

export default MenuItem
