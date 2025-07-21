
const Card = ({children}) => {
  return (
    <div className="bg-blue-300 w-[300px] h-[300px] rounded-2xl p-3">
      <h1>Card</h1>
      {children}
    </div>
  )
}

export default Card