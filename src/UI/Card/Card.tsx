import Counter from "../Counter/Counter";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Button from "../Button/Button";

const Card = () => {
  return (
    <div className="flex flex-col items-center lg:items-stretch lg:flex-row flex-nowrap gap-4 text-green-800">
      <div className="overflow-hidden bg-white rounded-lg lg:w-1/3 aspect-[2/1.5] shrink-0 w-full max-w-sm"></div>

      <div className="w-full lg:w-auto flex gap-4 lg:flex-col justify-between items-center lg:items-start">
        <span className="line-clamp-2 lg:line-clamp-1 text-xl">Pizza yummy nom Pizza yummy nom Pizza yummy nom Pizza yummy nom Pizza yummy nom</span>
        <Counter />
      </div>

      <div className="w-full lg:w-auto flex lg:flex-col justify-between text-2xl items-end">
        <span>$25</span>
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