import Component from "../interfaces/Component"

class MenuManagement implements Component{

    constructor(private element: HTMLElement){

    }

     render():void{
        const html =  `
        <div class="main-content">
            <div class="container-fluid h-100">
                <div class="main-content__header">
                    <div class="main-content__header__search-input">
                        <input class="px-4 py-2 " placeholder="Searching" />
                        <button class="mybtn mybtn-primary mybtn-lg">
                            <i class="bi bi-search px-2"></i>
                            <span>Search</span>
                        </button>
                    </div>
                </div>
        
                <div class="row">
                    <!-- Menu -->
                    <h1>Menu Page</h1>
        
                </div>
            </div>
        </div>`

        this.element.innerHTML = html
    }

}

export default MenuManagement