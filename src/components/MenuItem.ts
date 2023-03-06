import Component from "../interfaces/Component";

class MenuItem implements Component{
    render(): void {
        
        const html = `
            <div class="col-sm-12  col-lg-6 col-xxl-4">
                <div class="food-item p-3">
                    <div class="food-item__info row">
                        <div class="food-item__info__image col-4">
                            <img src="./src/assets/images/food.jpg" alt="">
                        </div>
                        <div class="food-item__info__desc col-8">
                            <div class="food-name">Com chien</div>
                            <div class="food-desc">Com chien truyen thon</div>
                            <div class="food-price">268000</div>
                        </div>
                    </div>
                    <div class="food-item__controls">
                        <div class="controls__quantity">
                            <button class="mybtn">-</button>
                            <span>1</span>
                            <button class="mybtn">+</button>
                        </div>
                        <div class="food-item__controls__add-cart"><button
                                class="mybtn mybtn-secondary btn-lg fs-6">Add Bill</button></div>
                    </div>
                </div>
            </div>
        `
    }
    
}

export default MenuItem