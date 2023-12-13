import { useState, useEffect, useContext } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import Order from '../../context/CartContext';

import Counter from "../Counter/Counter";
import Button from "../../view/Button/Button";
import { InCartProduct } from '../interfaces/product';

type Props = {
  product: InCartProduct,
  type?: string,
  amountInit?: number,
}

const Card = ({ product, type = '' }: Props) => {
  const { title, price, spicy, veg, image, category, id, amount } = product;

  const { cartStore } = useContext(Order);

  // const [amount, setAmount] = useState(amountInit);
  const [priceTotal, setPriceTotal] = useState(price);

  // useEffect(() => {
  //   if (amount > 0) {
  //     addItem((state: any) => {
  //       const newState = state.filter((item: { id: number; category: string; }) => {
  //         if (!(item.id === id && item.category === category)) {
  //           return item
  //         }
  //       });

  //       return [
  //         ...newState,
  //         {
  //           category: category,
  //           id: foodData.id,
  //           amount: amount,
  //           title: title,
  //           image: image,
  //           price: price,
  //         }
  //       ]
  //     })
  //     setPriceTotal(price * amount)
  //   } else {
  //     addItem((state: any) => {
  //       return state.filter((item: { id: number; category: string; }) => !(item.id === id && item.category === category))
  //     })
  //     setPriceTotal(price)
  //   }

  // }, [amount]);

  // useEffect(() => {
  //   const cacheAmount = orderList.reduce((acc: any, sum: { id: number; category: string; amount: number }) => {
  //     if (sum.id === id && sum.category === category) {
  //       return sum.amount
  //     }

  //     return acc;
  //   }, 0);

  //   setAmount(state => {
  //     if (!cacheAmount) {
  //       return 0;
  //     }

  //     if (cacheAmount !== state) {
  //       return cacheAmount;
  //     } else {
  //       return amount;
  //     }
  //   })

  // }, [orderList]);

  return (
    <div className={`flex flex-col relative items-center flex-nowrap gap-4 text-green-800 ${type === 'cart' ? 'lg:flex-row lg:items-stretch w-full lg:min-h-[88px]' : ''}`}>
      <div className='absolute flex flex-col left-0 top-0'>
        {spicy ? <LocalFireDepartmentOutlinedIcon sx={{ color: '#dc2626' }} /> : null}
        {veg ? <SpaOutlinedIcon /> : null}
      </div>

      <div className={`overflow-hidden bg-white rounded-lg  aspect-[2/1.3] shrink-0 w-full max-w-sm ${type === 'cart' ? 'lg:w-1/3' : ''}`}>
        <img className="w-full h-full object-contain" src={image} alt={title} />
      </div>

      <div className={`w-full flex flex-col gap-4 justify-between items-center ${type === 'cart' ? 'break-all lg:items-start lg:w-auto ' : 'sm:flex-row grow'} `}>
        <span className="line-clamp-2 mb-auto text-center sm:text-left">{title}</span>
        <span>${priceTotal}</span>
      </div>

      <div className={`w-full flex justify-between font-medium ${type === 'cart' ? 'lg:grow items-end lg:w-auto lg:flex-col' : 'items-center min-h-[44px]'}`}>
        {
          amount ?
            <>
              <Counter value={amount} />
              <Button
                type='icon'
                color='text-green-800 hover:text-green-600'
                pad='p-0'
              >
                <DeleteOutlinedIcon sx={{ fontSize: 28 }} />
              </Button>
            </>
            :
            <>
              <Button
                pad='px-4 py-2'>
                Order
                <ShoppingCartIcon />
              </Button>
            </>
        }
      </div>
    </div>
  )
}

export default Card