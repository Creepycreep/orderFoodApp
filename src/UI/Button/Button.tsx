type Props = {
  type?: string,
  children: React.ReactNode,
  onClick?: (params: any) => any,
  color?: string,
  pad?: string,
}

const Button = ({ children, type, color, pad = 'p-2', onClick }: Props) => {
  const classTypeIcon = 'leading-none w-max text-2xl p-2 active:scale-90';
  const classTypeBtn = 'flex items-center justify-center text-lg gap-4 w-full bg-green-600 rounded-3xl active:bg-green-600 active:scale-95 ';
  const classes = type === 'icon' ? classTypeIcon : classTypeBtn;

  return (
    <button
      className={`
      ${classes} 
      ${color ? color : 'text-white hover:bg-green-500'}
      ${pad} 
      transition duration-300`}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button