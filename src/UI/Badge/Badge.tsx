import { ReactNode } from 'react'
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
type childrenProps = {
  children?: ReactNode
}

const Badge = ({ children }: childrenProps) => {
  const isActiveClass = 'bg-green-600 shadow-lg shadow-green-300 text-white'
  return (
    <div className={`w-max flex gap-2 items-center hover:bg-green-600 rounded px-4 py-2 hover:shadow-lg hover:shadow-green-300 hover:text-white transition duration-300}`}>
      <FastfoodOutlinedIcon />
      {children}
      <span>All</span>
    </div>
  )
}

export default Badge