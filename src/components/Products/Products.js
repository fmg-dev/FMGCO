import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product.scss";
function Products() {
  const [products, setProducts] = useState([]);
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div className="products__container">
            <div className="products__container__up">
              <img
                className="products__container__up__img"
                src={product.image}
                alt=""
              />
            </div>
            <div className="products__container__bottom">
              <h4 className="products__container__bottom__title">
                <Link to={"/products"} title={`${product.title}`}>
                  {readMore
                    ? `${product.title}`
                    : `${product.title.substring(0, 30)}...`}
                </Link>
              </h4>
              {/* <p className="products__container__bottom__desc">{product.description}</p> */}
              <h6 className="products__container__bottom__price">
                ${product.price}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
