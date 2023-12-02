import FoodBlock from '../FoodBlock/FoodBlock';

type Props = {
  foodBlocks: any[],
}

const FoodList = ({ foodBlocks, }: Props) => {
  return (
    <>
      {foodBlocks.map(item => {
        return <FoodBlock
          key={item.category}
          foodData={item} />
      })}
    </>
  )
}

export default FoodList