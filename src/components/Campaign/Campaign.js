import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./campaign.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../StateProvider";
function Campaign({id, title, image, price}) {
  const [campaigns, setCampaigns] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15")
      .then((response) => response.json())
      .then((response) => setCampaigns(response));
  }, []);
  
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
    <div className="campaign">
      <h1>Campaigns</h1>
      <div className="campaign__container">
        {campaigns.map((campaign) => {
          return (
            <div className="campaign__container__card">
              <h4>
                {readMore
                  ? `${campaign.title}`
                  : `${campaign.title.substring(0, 20)}...`}
              </h4>
              <img src={campaign.image} alt="" />
              <h5>${campaign.price}</h5>
              <div className="campaign__container__card__buttons">
                <button onClick={addToCart}>
                  <AddShoppingCartIcon />
                </button>
                <button>
                  <SearchIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Campaign;
