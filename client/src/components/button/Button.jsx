// eslint-disable-next-line react/prop-types
const Button = ({ className, children, type, ...otherInfo }) => {
  return (
    <button className={className} type={type} {...otherInfo}>
      {children}
    </button>
  )
}

export default Button
