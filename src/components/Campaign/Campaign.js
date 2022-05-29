import React, { useEffect, useState } from "react";
import "./campaign.scss";

function Campaign() {
  const [campaigns, setCampaigns] = useState([]);
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15")
      .then((response) => response.json())
      .then((response) => setCampaigns(response));
  }, []);

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
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Campaign;
