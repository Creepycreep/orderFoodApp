import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';

import Badge from "../../view/Badge/Badge"

type Props = {
  categories: string[],
  setFilter: (a: string) => void,
  selectedFilter: string,
}
const Filter = ({ categories, setFilter, selectedFilter }: Props) => {
  return (
    <div className='flex gap-4 flex-wrap'>
      <Badge
        click={() => setFilter('')}
        isActive={selectedFilter === ''}>
        <FastfoodOutlinedIcon />
        <span className='text-capitalize'>All</span>
      </Badge>

      {
        categories.map(category => {
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
              click={() => setFilter(category)}
              key={category}
              isActive={selectedFilter === category}>
              {icon}
              <span className='capitalize'>{category}</span>
            </Badge>
          )
        })
      }
    </div>
  )
}

export default Filter