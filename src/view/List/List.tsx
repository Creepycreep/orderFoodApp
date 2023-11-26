type Props = {
  children: React.ReactNode,
  type?: string,
}

const List = ({ children, type }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 ">
      {children}
    </div>
  )
}

export default List