import { useState, useEffect } from 'react';

import Card from '../Card/Card';
import List from '../../view/List/List';

type Props = {
  foodData: {
    category: string,
    foodList: any[]
  }
}

const FoodBlock = ({ foodData }: Props) => {
  const [foodList, setFoodList] = useState<any[]>([]);

  useEffect(() => {
    setFoodList(foodData.foodList.map(item => {
      return {
        id: item.id,
        title: item.name,
        price: item.price,
        spicy: item.spicy,
        veg: item.vegetarian,
        image: item.image,
      }
    }));
  }, [foodData])

  return (
    <div>
      <h2 className='uppercase font-medium mb-4'>{foodData.category}</h2>

      <List>
        {foodList.map(item => {
          return <Card
            key={item.id}
            foodData={item}
          />
        })}
      </List>
    </div>
  )
}

export default FoodBlock