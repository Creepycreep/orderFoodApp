import { useContext } from 'react';
import { observer } from "mobx-react-lite"

import SearchIcon from '@mui/icons-material/Search';
import Order from '../../context/CartContext';

const Search = () => {
  const cartStore = useContext(Order);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    cartStore.updateSearchFilter(e.target.value);
  }

  return (
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
  )
}

export default observer(Search)