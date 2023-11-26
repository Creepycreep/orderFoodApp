type Props = {
  children: React.ReactNode,
  classes?: string,
}

const Container = ({ children, classes = '' }: Props) => {
  return (
    <div className={`container mx-auto px-4 ${classes ? classes : ''}`}>
      {children}
    </div>
  )
}
export default Container