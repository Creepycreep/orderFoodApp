import { initialProduct } from "../components/interfaces/product";

class foodService {
  _apiBase = 'https://my-json-server.typicode.com/creepycreep/fakepizza'

  getFood = async (url: string) => {
    let result = await fetch(url);
    return await result.json();
  }

  getAllFood = async () => {
    const data = await this.getFood(`${this._apiBase}/db`);
    return this._transformData(data)
  }

  _transformData = (res: any) => {
    const data = Object.keys(res).map(category => {
      const transformedList = res[category].map((item: any) => {
        return this._transformFoodItem(item, category);
      })

      return {
        category,
        foodList: transformedList
      }
    });

    return data;
  }

  _transformFoodItem = (item: initialProduct, category: string) => {
    return {
      category: category,
      id: item.id,
      amount: 0,
      title: item.name,
      image: item.image,
      price: item.price,
      veg: item.vegetarian,
      spicy: item.spicy
    }
  }

}

export default foodService