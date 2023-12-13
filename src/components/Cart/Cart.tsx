import { useState, useRef, useContext, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { observer } from "mobx-react-lite"

import { useClickOusideHandler } from '../../hooks/useClickOusideHandler';
import Card from "../Card/Card";
import Button from "../../view/Button/Button"
import Order from '../../context/CartContext';


const duration = 700;

const defaultStyle = {
  transition: `transform ${duration}ms ease`,
  transform: 'translateX:100%',
};

const transitionStyles = {
  entering: { transform: 'translateX(0%)' },
  entered: { transform: 'translateX(0%)' },
  exiting: { transform: 'translateX(100%)' },
  exited: { transform: 'translateX(100%)' },
  unmounted: {}
};

type Props = {
  isActive: boolean,
  onCartTriggerHandler: any,
}

const Cart = ({ isActive, onCartTriggerHandler }: Props) => {
  const nodeRef = useRef<any>(null);
  const [isChangeable, setIsChangeable] = useState(false);

  useClickOusideHandler(nodeRef, isChangeable, onCartTriggerHandler)
  const [priceTotal, setPriceTotal] = useState(0);

  const { cartStore } = useContext(Order);
  // useEffect(() => {
  //   setPriceTotal(
  //     orderList.reduce((acc: any, sum: any) => {
  //       return acc + sum.price * sum.amount;
  //     }, 0)
  //   )
  // }, [orderList]);

  // const submitOrder = () => {
  //   let formData = new FormData();
  //   formData.append('order', orderList)
  // }

  return (
    <Transition
      nodeRef={nodeRef}
      in={isActive}
      unmountOnExit={true}
      timeout={duration}
      onEntered={() => setIsChangeable(true)}
      onExited={() => setIsChangeable(false)}>

      {(state) => (
        <div
          ref={nodeRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          className="bg-green-100 top-[74px] right-0 fixed w-full lg:w-1/3 h-[calc(100vh-74px)] p-6 pb-0 lg:max-w-md overflow-x-auto">
          <div className='h-full flex flex-col'>
            <div className="grow flex flex-col gap-8 pb-6">
              <h2 className="text-xl font-semibold">My Order</h2>
              <div className='flex flex-col gap-8 mb-auto'>
                {cartStore.cartList.map((item: { id: number; amount: number, title: string; price: number; image: string; category: string; }) => {
                  return <Card
                    key={`${item.category}:${item.id}`}
                    product={item}
                    type='cart'
                  />
                })}
              </div>

              <div className='border-t border-green-800/50 p-3 flex justify-between text-xl'>
                <span>Total</span>
                <span className='font-medium'>${priceTotal}</span>
              </div>
              <Button pad='px-4 py-2'>
                Order
                <ArrowForwardIcon />
              </Button>
            </div>
          </div>
        </div>
      )}
    </Transition >
  )
}

export default observer(Cart)