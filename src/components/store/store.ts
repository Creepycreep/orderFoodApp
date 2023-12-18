import { makeAutoObservable, observable, action, computed } from "mobx"
import { Product, ProductList } from "../interfaces/product";

export default class CartStore {
  constructor() {
    makeAutoObservable(this, {
      foodList: observable,
      loadFoodList: action,
      updateAmount: action,

      cartList: observable,
      addInCart: action,
      removeOutCart: action,
      updateCart: action,

      badgeFilter: observable,
      updateFilter: action,

      searchFilter: observable,
      updateSearchFilter: action,

      totalPrice: computed,
      filteredFoodList: computed,
    })
  }

  get totalPrice() {
    return this.cartList.reduce((acc: number, sum: Product) => {
      return acc + sum.price * sum.amount;
    }, 0)
  }

  get filteredFoodList() {
    let list = [];

    if (this.searchFilter === '' && this.badgeFilter === '') {
      return this.foodList
    }

    if (this.searchFilter === '') {
      list = this.foodList
    }

    list = this.foodList.reduce((sum: any, item: { foodList: any[]; }) => {
      const exp = item.foodList.filter((foodPos: { title: string; }) => foodPos.title.toLowerCase().includes(this.searchFilter.toLowerCase()))

      if (exp.length > 0) {
        return [...sum, { ...item, foodList: exp }]
      }

      return sum
    }, [])

    if (this.badgeFilter === '') {
      return list
    }

    return list.filter((item: { category: string; }) => item.category === this.badgeFilter);
  }

  badgeFilter = ''
  updateFilter(category: string) {
    this.badgeFilter = category;
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

    this.updateAmount(product);
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