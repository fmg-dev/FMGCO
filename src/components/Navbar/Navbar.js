import React, { useEffect, useState } from "react";
import "./navbar.scss";
import {useStateValue} from "../StateProvider"

//!!!!! MATERIAL UI !!!!!

//!!!!! ICON !!!!!
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    color: "red",
  },
}));

function Navbar() {
  const [navbar, setNavbar] = useState();
  const [{cart}] = useStateValue()

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar__left">
        <h1>
          <Link to={"/"}>FMG E-CO</Link>
        </h1>
      </div>
      <div className={navbar ? "navbar__center active" : "navbar__center"}>
        <input
          type="text"
          className="navbar__center__input"
          placeholder="Search"
        />
        <SearchRoundedIcon className="navbar__center__icon" />
      </div>
      <div className="navbar__right">
        <ul className="navbar__right__list">
          <li className="navbar__right__list__listItem hover">
            <Link to={"/login"}>LOGIN</Link>
          </li>
          <li className="navbar__right__list__listItem hover">
            <Link to={"/signup"}>Sign up</Link>
          </li>
          <li className="navbar__right__list__listItem">
            <Link to={"cart"}>
              <IconButton disableRipple aria-label="cart">
                <StyledBadge badgeContent={cart?.length}>
                  <ShoppingCartRoundedIcon className="navbar__right__list__cart" />
                </StyledBadge>
              </IconButton>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
