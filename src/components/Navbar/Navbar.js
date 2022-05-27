import React from "react";
import "./navbar.scss";
//!!!!! MATERIAL UI !!!!!

//!!!!! ICON !!!!!
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 0,
    color: "red",
  },
}));

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>
          <Link to={"/"}>FMG E-CO</Link>
        </h1>
      </div>
      <div className="navbar__center">
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
              <IconButton  aria-label="cart">
                <StyledBadge  badgeContent={4} >
                  <ShoppingCartRoundedIcon className="navbar__right__list__cart" />
                </StyledBadge>
              </IconButton>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
