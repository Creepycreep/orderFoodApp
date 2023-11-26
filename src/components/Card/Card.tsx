import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

import Counter from "../Counter/Counter";
import Button from "../../view/Button/Button";

type Props = {
  foodData: {
    title: string,
    price: number,
    spicy: boolean,
    veg: boolean,
    image: string,
  },
  type?: string
}

const Card = ({ foodData, type = '', }: Props) => {
  const { title, price, spicy, veg, image } = foodData;

  return (
    <div className={`flex flex-col relative items-center flex-nowrap gap-4 text-green-800 ${type === 'cart' ? 'lg:flex-row lg:items-stretch' : ''}`}>
      <div className='absolute flex flex-col right-0'>
        {spicy ? <LocalFireDepartmentOutlinedIcon sx={{ color: '#dc2626' }} /> : null}
        {veg ? <SpaOutlinedIcon /> : null}
      </div>


      <div className={`overflow-hidden bg-white rounded-lg  aspect-[2/1.3] shrink-0 w-full max-w-sm ${type === 'cart' ? 'lg:w-1/3' : ''}`}>
        <img className="w-full h-full object-contain" src={image} alt={title} />
      </div>

      <div className={`w-full flex gap-4 justify-between items-center ${type === 'cart' ? 'lg:flex-col lg:items-start lg:w-auto' : ''} `}>
        <span className="line-clamp-2">{title}</span>
        <Counter />
      </div>

      <div className={`w-full flex justify-between items-end font-medium ${type === 'cart' ? 'lg:w-auto lg:flex-col' : ''}`}>
        <span>${price}</span>
        <Button
          type='icon'
          color='text-green-800 hover:text-green-600'
          pad='p-0'
        >
          <DeleteOutlinedIcon sx={{ fontSize: 28 }} />
        </Button>

      </div>
    </div>
  )
}

export default Card