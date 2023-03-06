import { Drink } from "../helpers/constant";
import Item from "./Item";

class DrinkItem implements Item {
  name: string;
  description: string;
  image: string;
  price: number;
  type: Drink = Drink.ALCOHOL

  constructor(name: string, description: string, image: string, price: number){
        this.name = name
        this.description = description
        this.image = image
        this.price = price
  }
}
export default DrinkItem;
