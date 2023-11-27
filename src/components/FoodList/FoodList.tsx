import FoodBlock from '../FoodBlock/FoodBlock';

const FoodList = ({ foodBlocks }: { foodBlocks: any[] }) => {
  return (
    <>
      {foodBlocks.map(item => {
        return <FoodBlock key={item.category} foodData={item} />
      })}
    </>
  )
}

export default FoodList