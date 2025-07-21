
const Card = ({title, description}) => {
  return (
    <div className="border-2 p-4 m-7">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>  
    )
}

export default Card;