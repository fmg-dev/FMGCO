import React from "react";
import { Link } from "react-router-dom";
//!!!CSS
import "./products.scss";
//!!!MUI
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../StateProvider";

function Products({ id, image, title, price }) {

  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="products">
      <div key={id} className="products__container">
        <div className="products__container__up">
          <img className="products__container__up__img" src={image} alt="" />
        </div>
        <div className="products__container__bottom">
          <h4 className="products__container__bottom__title">
            <Link to={"/products"} title={title}>
              {title}
            </Link>
          </h4>
          {/* <p className="products__container__bottom__desc">{product.description}</p> */}
          <h6 className="products__container__bottom__price">${price}</h6>
        </div>
        <div className="products__container__buttons">
          <button onClick={addToCart}>
            <AddShoppingCartIcon  />
          </button>
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
