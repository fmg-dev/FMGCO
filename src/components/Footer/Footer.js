import React from "react";
import "./footer.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <ul>
          <li className="footer__left__logo">
            <Link to={"/FMGCO"}>FMG E-CO</Link>
          </li>
          <li>Return policy</li>
          <li>Search out store</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="footer__center">
        <ul>
          <li>
            <FacebookOutlinedIcon className="footer__center__icon" /> Facebook
          </li>
          <li>
            <a href={"https://twitter.com/fmgdev_"}>
              <TwitterIcon className="footer__center__icon" /> Twitter
            </a>
          </li>
          <li>
            <a href={"https://www.instagram.com/fmgdev_/"}>
              <InstagramIcon className="footer__center__icon" /> Instagram
            </a>
          </li>
          <li>
            <a
              href={
                "https://www.linkedin.com/in/fatih-mehmet-g%C3%BCn-81ab761b8/"
              }
            >
              <LinkedInIcon className="footer__center__icon" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__right">
        <h6>
          &copy; 2022 Her şey ayağına gelsin! FMG E-CO Her Hakkı saklıdır.{" "}
        </h6>
        <div className="footer__right__img">
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
