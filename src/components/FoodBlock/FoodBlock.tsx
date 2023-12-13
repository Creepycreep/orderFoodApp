import { useState, useContext, useEffect } from 'react';

import Card from '../Card/Card';
import List from '../../view/List/List';
import Order from '../../context/CartContext';
import { InCartProduct } from '../interfaces/product';

type Props = {
  foodData: {
    category: string,
    foodList: any[],
  },
}

const FoodBlock = ({ foodData, }: Props) => {
  // const [foodList, setFoodList] = useState<any[]>([]);
  const { cartStore } = useContext(Order);
  // const { cartList: orderList } = cartStore;

  // useEffect(() => {
  //   setFoodList(cartStore.cartList.map((item: { id: any; name: any; price: any; spicy: any; vegetarian: any; image: any; }) => {
  //     return {
  //       id: item.id,
  //       title: item.name,
  //       price: item.price,
  //       spicy: item.spicy,
  //       veg: item.vegetarian,
  //       image: item.image,
  //       category: foodData.category
  //     }
  //   }));
  // }, [])

  // const elements = cartStore.cartList.map((item: InCartProduct) => {
  // let amount = 0;
  // if (cartStore.cartList.length > 0) {
  //   amount = cartStore.cartList.reduce((acc: any, sum: { id: number; category: string; amount: number }) => {
  //     if (sum.id === item.id && sum.category === item.category) {
  //       return sum.amount
  //     }
  //     return acc
  //   }, 0)
  // }

  // return <Card
  //   key={item.id}
  //   product={item}
  //   amountInit={amount}
  // />
  // })

  return (
    <div>
      <h2 className='uppercase font-medium mb-4'>{foodData.category}</h2>

      <List>
        {
          cartStore.cartList.map((item: InCartProduct) => {
            return <Card
              key={item.id}
              product={item}
            />
          })
        }
      </List>
    </div>
  )
}

export default FoodBlock