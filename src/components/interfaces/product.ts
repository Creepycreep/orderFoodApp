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