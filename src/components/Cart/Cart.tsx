import { useRef, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button"

type Props = {
  onCartTriggerHandler: (state: boolean) => void,
}

const Cart = ({ onCartTriggerHandler }: Props) => {
  const nodeRef = useRef<any>(null);


  const handleClick = (e: MouseEvent, ref: React.MutableRefObject<any>) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onCartTriggerHandler(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", event => handleClick(event, nodeRef));

    return () => {
      document.removeEventListener("click", event => handleClick(event, nodeRef));
    };
  })

  return (
    <div
      className="bg-green-100 top-[74px] right-0 fixed w-full lg:w-1/3 h-[calc(100vh-74px)] p-6 pb-0 font-medium lg:max-w-md overflow-x-auto">
      <div className='h-full flex flex-col'>
        <div className="grow flex flex-col gap-8 pb-6">
          <h2 className="text-xl font-semibold">My Order</h2>
          <div className='flex flex-col gap-8 mb-auto'>
            <Card />
            <Card />

          </div>
          <Button
            pad='px-4 py-2'
          >
            Order
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart