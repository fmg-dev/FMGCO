import React, { useEffect, useState } from "react";
import CampaingCartProduct from "../CampaingCartProduct/CampaingCartProduct";

function Campaign() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/6")
      .then((response) => response.json())
      .then((response) => setCampaigns(response));
  }, []);

  return (
    <div>
      <CampaingCartProduct
        id={campaigns.id}
        title={campaigns.title}
        image={campaigns.image}
        price={campaigns.price}
      />
    </div>
  );
}

export default Campaign;
