import { useState, useContext } from 'react';
import { observer } from "mobx-react-lite"

import LocalPizzaRoundedIcon from '@mui/icons-material/LocalPizzaRounded';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Container from '../../view/Container/Container';
import Cart from '../Cart/Cart';
import Button from '../../view/Button/Button';
import Order from '../../context/CartContext';
import Search from '../Search/Search';

const Header = () => {
  const [isCartActive, setIsCartActive] = useState(false);
  const { cartList } = useContext(Order);

  const onCartTriggerHandler = () => {
    setIsCartActive(prev => !prev)
  }

  return (
    <header className='bg-green-600 py-4 fixed w-full z-20'>
      <Container classes={`flex items-center`}>
        <div className="logo flex lg:gap-1 items-center text-xl lg:text-3xl font-bold text-white mr-auto">
          <LocalPizzaRoundedIcon sx={{ color: '#ffac72' }} />
          PizzaYummy
        </div>
        <Search />

        <Button
          type='icon'
          onClick={onCartTriggerHandler}
          color='text-green-100 hover:text-green-300 relative'
        >
          {isCartActive ? <CloseIcon /> : <ShoppingCartIcon />}
          {cartList.length ? <AmountView amount={cartList.length} /> : null}
        </Button>
      </Container>

      <Cart isActive={isCartActive} onCartTriggerHandler={setIsCartActive} />
    </header>
  )
}

const AmountView = ({ amount }: { amount: number }) => {
  return (
    <div className='absolute top-0 right-0 flex items-center justify-center bg-white rounded-full text-green-600 text-xs leading-none p-1 w-[20px] h-[20px]'>
      {amount}
    </div>
  )
}

export default observer(Header)