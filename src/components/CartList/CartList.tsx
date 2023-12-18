import { useContext } from 'react';
import { observer } from "mobx-react-lite"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Product } from '../interfaces/product';
import Card from "../Card/Card";
import Button from "../../view/Button/Button"
import Order from '../../context/CartContext';

const CartList = () => {
  const { cartList, totalPrice } = useContext(Order);

  return (
    <div className="grow flex flex-col gap-8 pb-6">
      <h2 className="text-xl font-semibold">My Order</h2>
      <div className='flex flex-col gap-8 mb-auto'>
        {cartList.length > 0 ? cartList.map((item: Product) => {
          return <Card
            key={`${item.category}:${item.id}`}
            product={item}
            type='cart'
          />
        }) : null}
      </div>

      <div className='border-t border-green-800/50 p-3 flex justify-between text-xl'>
        <span>Total</span>
        <span className='font-medium'>${totalPrice}</span>
      </div>
      <Button pad='px-4 py-2'>
        Order
        <ArrowForwardIcon />
      </Button>
    </div>
  )
}

export default observer(CartList)