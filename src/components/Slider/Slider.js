import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Sliders() {
  const [offer, setOffer] = useState([]);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((response) => setOffer(response));
  }, []);

  const settings = {
    arrows: true,
    autoplay: true,
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    pauseOnHover: true,


  };

  
  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          {offer.map((item) => {
            return (
              <div className="slider__container" key={item.id}>
                <img
                  className="slider__container__img"
                  src={item.image}
                  alt=""
                />
                <div className="slider__container__text">
                  <Link to={`${item.title}`}>
                    <h2 className="slider__container__text__title">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="slider__container__text__category">
                    {item.category}
                  </p>
                  <p className="slider__container__text__description">
                    {readMore
                      ? `${item.description}`
                      : `${item.description.substring(0, 80)}...`}
                    <Button className="slider__container__text__description__button" onClick={() => setReadMore(!readMore)}>
                      {readMore ? "show less" : "read more"}
                    </Button>
                  </p>

                  <h5 className="slider__container__text__price">
                    {item.price} $
                  </h5>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <hr />
    </>
  );
}

export default Sliders;
