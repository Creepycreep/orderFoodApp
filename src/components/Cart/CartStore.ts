import { makeAutoObservable, observable, action } from "mobx"
import { InCartProduct } from "../interfaces/product"
import Order from '../../context/CartContext';

export default class CartStore {
  constructor() {
    makeAutoObservable(this, {
      cartList: observable,
      addInCart: action,
      removeOutCart: action,
      updateCart: action,
    })
  }

  cartList: Array<InCartProduct> = [
    {
      id: 0,
      title: "Margherita",
      spicy: false,
      veg: true,
      price: 17,
      image: "https://i.imgur.com/8B8YLOo.jpg",
      amount: 0,
      category: 'pizza',
    },
  ]

  addInCart(product: InCartProduct) {
    this.cartList.push(product)
  }

  removeOutCart(product: InCartProduct) {
    this.cartList = this.cartList.filter(item => {
      return product.id !== item.id && product.category !== item.category;
    })
  }

  updateCart(product: InCartProduct) {
    this.cartList = this.cartList.map(item => {
      if (product.id !== item.id && product.category !== item.category) {
        return item;
      }

      return { ...item, amount: product.amount }
    })
  }
}