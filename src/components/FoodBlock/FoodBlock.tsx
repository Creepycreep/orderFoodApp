import { useState, useContext, useEffect } from 'react';

import Card from '../Card/Card';
import List from '../../view/List/List';
import Order from '../../context/CartContext';

type Props = {
  foodData: {
    category: string,
    foodList: any[],
  },
}

const FoodBlock = ({ foodData, }: Props) => {
  const [foodList, setFoodList] = useState<any[]>([]);
  const { orderList, setOrderList } = useContext(Order);

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

  const elements = foodList.map(item => {
    let amount = 0;
    if (orderList.length > 0) {

      amount = orderList.reduce((acc: any, sum: { id: number; category: string; amount: number }) => {
        if (sum.id === item.id && sum.category === item.category) {
          return sum.amount
        }
        return acc
      }, 0)
    }

    return <Card
      key={item.id}
      foodData={item}
      addItem={setOrderList}
      amountInit={amount}
    />
  })

  return (
    <div>
      <h2 className='uppercase font-medium mb-4'>{foodData.category}</h2>

      <List>
        {elements}
      </List>
    </div>
  )
}

export default FoodBlock