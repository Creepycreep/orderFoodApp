import FoodBlock from '../FoodBlock/FoodBlock';

type Props = {
  foodBlocks: any[],
  onChooseFood: React.Dispatch<React.SetStateAction<any>>,
}

const FoodList = ({ foodBlocks, onChooseFood }: Props) => {
  return (
    <>
      {foodBlocks.map(item => {
        return <FoodBlock
          key={item.category}
          foodData={item}
          onChooseFood={onChooseFood} />
      })}
    </>
  )
}

export default FoodList