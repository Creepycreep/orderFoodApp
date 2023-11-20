import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Button = () => {
  return (
    <button className='flex items-center justify-center text-lg gap-4 w-full px-4 py-2 bg-green-600 text-white rounded-3xl active:bg-green-600 active:scale-95 hover:bg-green-500 transition duration-300'>
      Order
      <ArrowForwardIcon />
    </button>
  )
}

export default Button