const Container = ({ children, classes = '' }) => {
  return (
    <div className={`container mx-auto px-4 ${classes ? classes : ''}`}>
      {children}
    </div>
  )
}
export default Container