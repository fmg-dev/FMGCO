import React, { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import "./product.scss"


function Product() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState();

 
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/1`)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);


  return (
    <div className="productsContainer">
      <Products
        id={products.id}
        image={products.image}
        title={products.title}
        price={products.price}
      />
    </div>
  );
}

export default Product;
