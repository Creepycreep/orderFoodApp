import { useContext } from 'react';
import { Product, ProductList } from '../interfaces/product';
import { observer } from "mobx-react-lite"

import Order from '../../context/CartContext';

import Card from '../Card/Card';
import List from '../../view/List/List';

const FoodBlock = ({ productList }: { productList: ProductList }) => {
  const cartStore = useContext(Order)

  return (
    <div>
      <h2 className='uppercase font-medium mb-4'>{productList.category}</h2>
      <List>
        {productList.foodList.map((item: Product) => {
          return <Card
            key={item.id}
            product={item}
          />
        })}
      </List>
    </div>
  )
}

export default FoodBlock