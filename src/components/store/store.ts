import { makeAutoObservable, observable, action } from "mobx"
import { Product, ProductList } from "../interfaces/product";

export default class CartStore {
  constructor() {
    makeAutoObservable(this, {
      foodList: observable,
      cartList: observable,
      filter: observable,
      searchFilter: observable,
      addInCart: action,
      removeOutCart: action,
      updateCart: action,
      loadFoodList: action,
      updateAmount: action,
      updateFilter: action,
      updateSearchFilter: action,
    })
  }

  filter = ''
  updateFilter(category: string) {
    this.filter = category;
  }

  searchFilter = ''
  updateSearchFilter(val: string) {
    this.searchFilter = val;
  }

  foodList: Array<ProductList> = []

  loadFoodList(arr: Array<ProductList>) {
    this.foodList = arr;
  }

  updateAmount(product: Product) {
    const block = this.foodList.findIndex(elem => {
      return elem.category === product.category
    })

    this.foodList[block].foodList.forEach(elem => {
      if (elem.id === product.id && elem.category === product.category) {
        elem.amount = product.amount
      }
    })
  }

  cartList: Array<Product> = []

  addInCart(product: Product) {
    this.cartList.push(product);
    this.updateAmount(product)
  }

  removeOutCart(product: Product) {
    this.cartList = this.cartList.filter(item => {
      return !(product.id === item.id && product.category === item.category);
    })

    this.updateAmount(product)
  }

  updateCart(product: Product) {
    this.cartList = this.cartList.map(item => {
      if (!(product.id === item.id && product.category === item.category)) {
        return item;
      }

      return { ...item, amount: product.amount }
    })

    this.updateAmount(product)
  }
}