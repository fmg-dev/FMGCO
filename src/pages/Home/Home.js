import React from "react";
import Campaign from "../../components/Campaign/Campaign";
import Slider from "../../components/Slider/Slider";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <Slider />
      <Campaign />
    </div>
  );
}

export default Home;
