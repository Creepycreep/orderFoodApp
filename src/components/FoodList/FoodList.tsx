import { useState, useEffect } from 'react';

import foodService from '../../service/foodService'
import FoodBlock from '../FoodBlock/FoodBlock';

const FoodList = () => {
  const food = new foodService();

  const [foodBlocks, setFoodBlock] = useState<any[]>([]);

  useEffect(() => {
    getFood();
  }, [])

  const getFood = () => {
    food.getAllFood()
      .then(res => {
        setFoodBlock(res)
      })
  }

  return (
    <>
      {foodBlocks.map(item => {
        return <FoodBlock key={item.category} foodData={item} />
      })}
    </>
  )
}

export default FoodList