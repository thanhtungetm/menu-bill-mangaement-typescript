import MenuList from "../components/MenuList";
import Component from "../interfaces/Component";
import Item from "../model/Item";

class BillManagement implements Component {
  list: Item[];
  constructor(private element: HTMLElement, props: any) {
    this.list = props.list;
    console.log("List", this.list);
    
  }

  render(): void {
    const html = `
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
                    <div class="col-12 col-md-7 col-lg-7 col-xxl-9">
                        <div class="main-content__filters px-5 py-4">
                            <button class="mybtn mybtn-primary mybtn-lg">Breakfast</button>
                            <button class="mybtn mybtn-lg">Lunch</button>
                            <button class="mybtn mybtn-lg">Evening</button>
                            <button class="mybtn mybtn-lg">Drink</button>
                        </div>
                        
                        <div class="main-content__list px-sm-2 px-lg-3">
                            <div class="main-content__list__title">Menu</div>
                            <div class="main-content__list_menu row gx-1 gy-1 gx-md-2 gy-md-2">
                        
                                
                        
                            </div>
                        </div>
                    </div>
        
                    <!-- Bill -->
                    <div class="col-12 col-md-5 col-lg-5 col-xxl-3  py-2">
                            <div class="bill bg-white p-3">
                                <div class="bill__title flex align-items-center">
                                    <span class="fs-3">Bill</span>
                                    <span>#00001</span>
                                </div>
                                
                                
                                <ul class="py-2">
                                    <!-- Bill Item -->
                                    <li class="bill_item">
                                        <div class="bill_item__image">
                                            <img src="./src/assets/images/food.jpg" alt="">
                                        </div>
                                        <div class="bill_item__info px-3">
                                            <h5>Cơm chiên</h5>
                                            <h6>56.000 đ</h6>
                                            <div class="bill_item__info__quantity">
                                                <div class="bill_item__info__quantity__controls">
                                                    <div class="controls__quantity">
                                                        <button class="mybtn">-</button>
                                                        <span>1</span>
                                                        <button class="mybtn">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- Bill Item -->
                                    <li class="bill_item">
                                        <div class="bill_item__image">
                                            <img src="./src/assets/images/food.jpg" alt="">
                                        </div>
                                        <div class="bill_item__info px-3">
                                            <h5>Cơm chiên</h5>
                                            <h6>56.000 đ</h6>
                                            <div class="bill_item__info__quantity">
                                                <div class="bill_item__info__quantity__controls">
                                                    <div class="controls__quantity">
                                                        <button class="mybtn">-</button>
                                                        <span>1</span>
                                                        <button class="mybtn">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- Bill Item -->
                                    <li class="bill_item">
                                        <div class="bill_item__image">
                                            <img src="./src/assets/images/food.jpg" alt="">
                                        </div>
                                        <div class="bill_item__info px-3">
                                            <h5>Cơm chiên</h5>
                                            <h6>56.000 đ</h6>
                                            <div class="bill_item__info__quantity">
                                                <div class="bill_item__info__quantity__controls">
                                                    <div class="controls__quantity">
                                                        <button class="mybtn">-</button>
                                                        <span>1</span>
                                                        <button class="mybtn">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- Bill Item -->
                                    <li class="bill_item">
                                        <div class="bill_item__image">
                                            <img src="./src/assets/images/food.jpg" alt="">
                                        </div>
                                        <div class="bill_item__info px-3">
                                            <h5>Cơm chiên</h5>
                                            <h6>56.000 đ</h6>
                                            <div class="bill_item__info__quantity">
                                                <div class="bill_item__info__quantity__controls">
                                                    <div class="controls__quantity">
                                                        <button class="mybtn">-</button>
                                                        <span>1</span>
                                                        <button class="mybtn">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <hr/>
                                <div class="bill__calculate fs-4">
                                    <div class="d-flex justify-content-end">
                                        <span class="px-1">Total:</span>
                                        <span class="bill__total">500.000đ</span>
                                    </div>
                                    <div class="text-center py-1">
                                        <button class="mybtn mybtn-primary mybtn-lg">Save Bill</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>`;
    this.element.innerHTML = html;

    new MenuList(
      document.querySelector(".main-content__list_menu") as HTMLElement
    ).render();
  }
}

export default BillManagement;
