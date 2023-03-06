import Item from "./Item";

type BillDetail = {
    item: Item,
    quantity: number,
}
class Bill{
    id: number;
    itemList : BillDetail[] = [];
    orderTime: Date = new Date()

    constructor(id:number){
        this.id = id
    }

    add(item: Item, quantity:number){
        this.itemList.push({item, quantity})
    }
}
export default Bill