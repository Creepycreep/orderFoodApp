const Counter = () => {
  return (
    <div className="border border-green-700/50 rounded-lg w-max text-2xl  text-green-700 flex items-center overflow-hidden">
      <button className="p-2 active:bg-green-200 transition-colors duration-300 leading-none disabled:text-green-700/50 " disabled>-</button >
      <span className="p-2 text-xl leading-none ">0</span>
      <button className=" p-2 active:bg-green-200 transition-colors duration-300 leading-none disabled:text-green-700/50">+</button>
    </div >
  )
}

export default Counter