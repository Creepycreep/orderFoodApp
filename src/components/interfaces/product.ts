export interface initialProduct {
  description: string,
  id: number,
  image: string,
  ingredients: string[],
  name: string,
  price: number,
  spicy: boolean,
  vegetarian: boolean,
}
export interface Product {
  id: number,
  title: string,
  price: number,
  spicy?: boolean,
  veg?: boolean,
  image: string,
  category: string,
  amount: number,
}

export interface ProductList {
  category: string,
  foodList: Array<Product>,
}