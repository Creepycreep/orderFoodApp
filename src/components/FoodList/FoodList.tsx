import { useState, useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite"

import Order from '../../context/CartContext';
import foodService from '../../service/foodService';

import FoodBlock from '../FoodBlock/FoodBlock';
import Spinner from '../../components/Spinner/Spinner';
import Error from '../Error/Error';
import { ProductList } from '../interfaces/product';

const FoodList = () => {
  const food = new foodService();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const cartStore = useContext(Order)

  useEffect(() => {
    getFood();
  }, [])

  const getFood = () => {
    setIsLoading(true);
    food.getAllFood()
      .then((res) => {
        cartStore.loadFoodList(res);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <>
      {isError ? <Error /> : null}
      {isLoading ? <Spinner /> : cartStore.filteredFoodList.map((item: ProductList) => {
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