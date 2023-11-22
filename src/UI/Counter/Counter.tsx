import { useState, useEffect } from "react"

const Counter = () => {
  const min = 0;
  const max = 20;

  const [amount, setAmount] = useState(0);
  const [isDisabledMin, setIsDisabledMin] = useState(false);
  const [isDisabledMax, setIsDisabledMax] = useState(false);



  useEffect(() => {
    amount === min ? setIsDisabledMin(true) : setIsDisabledMin(false)
    amount === max ? setIsDisabledMax(true) : setIsDisabledMax(false)

  }, [amount])

  const onClickHandler = (value: number) => {
    setAmount(state => state + value)
  }

  return (
    <div className="shrink-0 border border-green-800/50 rounded-lg w-max text-2xl  text-green-800 flex items-center overflow-hidden">
      <button
        onClick={() => onClickHandler(-1)}
        className="p-2 active:bg-green-200 hover:bg-green-200/80 transition-colors duration-300 leading-none  disabled:text-green-800/50 disabled:bg-transparent"
        disabled={isDisabledMin}
      >-</button >

      <span className="p-2 text-xl leading-none min-w-[36px] text-center">{amount}</span>

      <button
        onClick={() => onClickHandler(1)}
        className="p-2 hover:bg-green-200/80 
      active:bg-green-200 transition-colors duration-300 leading-none disabled:text-green-800/50 disabled:bg-transparent"
        disabled={isDisabledMax}
      >+</button>
    </div >
  )
}

export default Counter  