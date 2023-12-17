import { useState, useContext } from 'react';
import { observer } from "mobx-react-lite"

import LocalPizzaRoundedIcon from '@mui/icons-material/LocalPizzaRounded';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Container from '../../view/Container/Container';
import Cart from '../Cart/Cart';
import Button from '../../view/Button/Button';
import Order from '../../context/CartContext';

const Header = () => {

  const [isCartActive, setIsCartActive] = useState(false);
  const cartStore = useContext(Order);

  const onCartTriggerHandler = () => {
    setIsCartActive(prev => !prev)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    cartStore.updateSearchFilter(e.target.value);
  }

  return (
    <header className='bg-green-600 py-4 fixed w-full z-20'>
      <Container classes={`flex items-center`}>
        <div className="logo flex lg:gap-1 items-center text-xl lg:text-3xl font-bold text-white mr-auto">
          <LocalPizzaRoundedIcon sx={{ color: '#ffac72' }} />
          PizzaYummy
        </div>

        <form onSubmit={(e) => { e.preventDefault() }} className=" lg:w-1/2 search flex lg:bg-green-100 rounded-xl lg:mr-4">
          <button className='hidden lg:block text-green-100 lg:text-green-700 bg-transparent p-2'>
            <SearchIcon />
          </button>
          <input
            onChange={onChangeHandler}
            value={cartStore.searchFilter}
            className='hidden lg:block  w-full form-input p-2 pl-0 bg-transparent  border-transparent placeholder:text-green-700/50 text-green-700 focus:border-transparent focus:ring-0'
            type="text"
            placeholder='What would you like to eat today?' />
        </form>

        <Button
          type='icon'
          onClick={onCartTriggerHandler}
          color='text-green-100 hover:text-green-300 relative'
        >
          {isCartActive ? <CloseIcon /> : <ShoppingCartIcon />}
          {cartStore.cartList.length ? <AmountView amount={cartStore.cartList.length} /> : null}
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