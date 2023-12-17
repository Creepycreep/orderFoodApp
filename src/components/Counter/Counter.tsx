import { useState, useEffect } from "react"

const Counter = ({ value = 0, updateAmountFood, removeAmountFood }: { value?: number, updateAmountFood: (a: number) => void, removeAmountFood: () => void }) => {
  const min = 0;
  const max = 20;

  const [isDisabledMin, setIsDisabledMin] = useState(false);
  const [isDisabledMax, setIsDisabledMax] = useState(false);
  const [amount, setAmount] = useState(value);

  useEffect(() => {
    value === min ? setIsDisabledMin(true) : setIsDisabledMin(false)
    value === max ? setIsDisabledMax(true) : setIsDisabledMax(false)
  }, [value])

  useEffect(() => {
    if (amount > 0) {
      updateAmountFood(amount)
    } else {
      removeAmountFood()
    }
  }, [amount])

  const onClickHandler = (val: number) => {
    setAmount(a => a + val);
  }

  return (
    <div className="shrink-0 border border-green-800/50 rounded-lg w-max text-xl text-green-800 flex items-center overflow-hidden">
      <button
        className="p-2 active:bg-green-300/60 hover:bg-green-200/80 transition-colors duration-300 leading-none  disabled:text-green-800/50 disabled:bg-transparent"
        disabled={isDisabledMin}
        onClick={() => onClickHandler(-1)}
      >-</button >

      <span className="p-2 text-lg leading-none min-w-[38px] text-center">{amount}</span>

      <button
        className="p-2 hover:bg-green-200/80 
      active:bg-green-300/60 transition-colors duration-300 leading-none disabled:text-green-800/50 disabled:bg-transparent"
        disabled={isDisabledMax}
        onClick={() => onClickHandler(1)}
      >+</button>
    </div >
  )
}

export default Counter  