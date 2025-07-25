import Product from "./Product"

const ProductList = ({productList}) => {
  
  return (
    <div className="flex flex-wrap gap-4 gap-y-9  justify-center">
      {
        productList && productList.map(list => (
          <Product key={list.id} id={list.id} image={list.image} name={list.title} price={list.price} dec={list.description} allData={productList}/>
        ))
      }
    </div>
  )
}

export default ProductList

