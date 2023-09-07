import '../styles/Button.css'

const Button = (props) => {

  console.log(props);
  return (
    <button
      className="btn"
      {...props}
    / >  

  )
}

export default Button