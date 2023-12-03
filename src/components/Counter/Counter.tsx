import { useState, useEffect } from "react"

const Counter = ({ value = 0, setAmountFood }: { value?: number, setAmountFood: React.Dispatch<React.SetStateAction<number>> }) => {
  const min = 0;
  const max = 20;

  // const [amount, setAmount] = useState(initialValue);
  const [isDisabledMin, setIsDisabledMin] = useState(false);
  const [isDisabledMax, setIsDisabledMax] = useState(false);

  useEffect(() => {
    value === min ? setIsDisabledMin(true) : setIsDisabledMin(false)
    value === max ? setIsDisabledMax(true) : setIsDisabledMax(false)

  }, [value])

  const onClickHandler = (val: number) => {
    setAmountFood(a => a + val)
  }

  return (
    <div className="shrink-0 border border-green-800/50 rounded-lg w-max text-xl text-green-800 flex items-center overflow-hidden">
      <button
        onClick={() => onClickHandler(-1)}
        className="p-2 active:bg-green-300/60 hover:bg-green-200/80 transition-colors duration-300 leading-none  disabled:text-green-800/50 disabled:bg-transparent"
        disabled={isDisabledMin}
      >-</button >

      <span className="p-2 text-lg leading-none min-w-[38px] text-center">{value}</span>

      <button
        onClick={() => onClickHandler(1)}
        className="p-2 hover:bg-green-200/80 
      active:bg-green-300/60 transition-colors duration-300 leading-none disabled:text-green-800/50 disabled:bg-transparent"
        disabled={isDisabledMax}
      >+</button>
    </div >
  )
}

export default Counter  