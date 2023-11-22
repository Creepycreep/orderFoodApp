import { useState } from 'react';

import LocalPizzaRoundedIcon from '@mui/icons-material/LocalPizzaRounded';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Container from '../Container/Container';
import Cart from '../../components/Cart/Cart';
import Button from '../Button/Button';

const Header = () => {
  const [isCartActive, setIsCartActive] = useState(false);

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

        <form className=" lg:w-1/2 search flex lg:bg-green-100 rounded-xl lg:mr-4">
          <button className='text-green-100 lg:text-green-700 bg-transparent p-2'>
            <SearchIcon />
          </button>
          <input className='hidden lg:block  w-full form-input p-2 pl-0 bg-transparent  border-transparent placeholder:text-green-700/50 text-green-700 focus:border-transparent focus:ring-0' type="text" placeholder='What would you like to eat today?' />
        </form>

        <Button
          type='icon'
          onClick={onCartTriggerHandler}
          color='text-green-100 hover:text-green-300'
        >
          {isCartActive ? <CloseIcon /> : <ShoppingCartIcon />}
        </Button>
      </Container>

      <Cart isActive={isCartActive} onCartTriggerHandler={setIsCartActive} />
    </header>
  )
}

export default Header