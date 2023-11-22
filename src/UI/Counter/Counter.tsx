const Counter = () => {
  return (
    <div className="shrink-0 border border-green-800/50 rounded-lg w-max text-2xl  text-green-800 flex items-center overflow-hidden">
      <button className="p-2 active:bg-green-200 hover:bg-green-200/80 transition-colors duration-300 leading-none  disabled:text-green-800/50 disabled:bg-transparent" disabled>-</button >
      <span className="p-2 text-xl leading-none ">0</span>
      <button className="p-2 hover:bg-green-200/80 active:bg-green-200 transition-colors duration-300 leading-none disabled:text-green-800/50 disabled:bg-transparent">+</button>
    </div >
  )
}

export default Counter  