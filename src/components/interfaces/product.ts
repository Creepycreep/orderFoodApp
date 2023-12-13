export interface Product {
  id: number,
  title: string,
  price: number,
  spicy?: boolean,
  veg?: boolean,
  image: string,
  category: string,
}

export interface InCartProduct extends Product {
  amount: number,
}