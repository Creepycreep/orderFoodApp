import { useState, useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite"

import Order from '../../context/CartContext';
import foodService from '../../service/foodService';

import FoodBlock from '../FoodBlock/FoodBlock';
import Spinner from '../../components/Spinner/Spinner';
import { ProductList } from '../interfaces/product';

const FoodList = () => {
  const food = new foodService();
  const [isLoading, setIsLoading] = useState(true);
  const cartStore = useContext(Order)

  useEffect(() => {
    getFood();
  }, [])

  const getFood = () => {
    setIsLoading(true);
    food.getAllFood()
      .then((res) => {
        cartStore.loadFoodList(res);
        setIsLoading(false);
      })
  }

  const searchFilterData = cartStore.searchFilter === '' ? cartStore.foodList : cartStore.foodList.reduce((sum: any, item: { foodList: any[]; }) => {
    const exp = item.foodList.filter((foodPos: { title: string; }) => foodPos.title.toLowerCase().includes(cartStore.searchFilter.toLowerCase()))

    if (exp.length > 0) {
      return [...sum, { ...item, foodList: exp }]
    }

    return sum
  }, [])

  const list = cartStore.filter === '' ? searchFilterData : searchFilterData.filter((item: { category: string; }) => item.category === cartStore.filter);

  return (
    <>
      {isLoading ? <Spinner /> : list.map((item: ProductList) => {
        return <FoodBlock
          key={item.category}
          productList={item}
        />
      })
      }
    </>
  )
}

export default observer(FoodList)