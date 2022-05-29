import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./category.scss";
import { Link } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((response) => setCategories(response));
  }, []);

  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <div className="categories__container">
            <ul className="categories__container__ul">
              <li className="categories__container__ul__li">
                <Button>
                  <Link to={`/products`}>{category}</Link>
                </Button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
