import { useState, useEffect } from 'react';

import Card from '../Card/Card';
import List from '../../view/List/List';

type Props = {
  foodData: {
    category: string,
    foodList: any[],
  },
  onChooseFood: React.Dispatch<React.SetStateAction<any>>,
}

const FoodBlock = ({ foodData, onChooseFood }: Props) => {
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
        category: foodData.category
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
            onChooseFood={onChooseFood}
          />
        })}
      </List>
    </div>
  )
}

export default FoodBlock