import { useContext } from 'react';
import { observer } from "mobx-react-lite"

import Order from '../../context/CartContext';

import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';

import Badge from "../../view/Badge/Badge"

const Filter = () => {
  const cartStore = useContext(Order);
  const filter = cartStore.filter;

  const categories = cartStore.foodList.map((item: { category: any; }) => item.category)


  return (
    <div className='flex gap-4 flex-wrap'>
      <Badge
        click={() => cartStore.updateFilter('')}
        isActive={filter === ''}
      >
        <FastfoodOutlinedIcon />
        <span className='text-capitalize'>All</span>
      </Badge>

      {
        categories.map((category: string) => {
          let icon = null;
          switch (category) {
            case 'pizza':
              icon = <LocalPizzaOutlinedIcon />;
              break;
            case 'salads':
              icon = <DinnerDiningOutlinedIcon />;
              break;
            case 'dessert':
              icon = <BakeryDiningOutlinedIcon />;
              break;
            case 'drinks':
              icon = <WaterDropOutlinedIcon />;
              break;
            default:
              icon = <FastfoodOutlinedIcon />;
          }
          return (
            <Badge
              click={() => cartStore.updateFilter(category)}
              key={category}
              isActive={filter === category}
            >
              {icon}
              <span className='capitalize'>{category}</span>
            </Badge>
          )
        })
      }
    </div>
  )
}

export default observer(Filter)