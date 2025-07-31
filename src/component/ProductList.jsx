import Product from "./Product";

const ProductList = ({ productList }) => {
  return (
    <div className="flex flex-wrap gap-4 gap-y-9 justify-center">
      {productList?.map((list) => (
        <Product
          key={list.id}
          id={list.id}
          thumbnail={list.thumbnail}
          name={list.title}
          price={list.price}
          dec={list.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
