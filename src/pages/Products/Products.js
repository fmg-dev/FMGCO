import React, { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import "./products.scss";
function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);

 
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${count}`)
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

export default ProductsPage;
