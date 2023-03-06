import { tempData } from "../data/tempData"
import Item from "../model/Item"

class MenuService{
    list: Item[] = tempData
}
export default new MenuService()