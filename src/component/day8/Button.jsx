
const Button = ({onclick}) => {
  return (
    <div>
      <button className="bg-blue-800 text-white p-3 mt-3 cursor-pointer" onClick={onclick}>Model</button>
    </div>
  )
}

export default Button