import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';

import Badge from "../../view/Badge/Badge"

const Filter = () => {
  return (
    <div className='flex gap-4 flex-wrap'>
      <Badge>
        <FastfoodOutlinedIcon />
        <span>All</span>
      </Badge>

      <Badge>
        <LocalPizzaOutlinedIcon />
        <span>Pizza</span>
      </Badge>

      <Badge>
        <DinnerDiningOutlinedIcon />
        <span>Salads</span>
      </Badge>

      <Badge>
        <BakeryDiningOutlinedIcon />
        <span>Desserts</span>
      </Badge>

      <Badge>
        <WaterDropOutlinedIcon />
        <span>Sauces</span>
      </Badge>
    </div>
  )
}

export default Filter