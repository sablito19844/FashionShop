import React from "react";
import { Link } from "react-router-dom";
import clothesLogo from "../images/clothes-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { checkIsMenuOpen } from "../helper/functions";
import "../components/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className="navbar">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={clothesLogo} alt=""></img>
        </Link>

        <div>
          <IconContext.Provider
            value={{ size: "1.5em", className: "global-class-name" }}
          >
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              {/*  {menuOpen ? <HiOutlineX /> : <GiHamburgerMenu />} */}
              {checkIsMenuOpen(menuOpen) ? <HiOutlineX /> : <GiHamburgerMenu />}
            </div>
          </IconContext.Provider>
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link onClick={() => setMenuOpen(!menuOpen)} to="/categories">
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(!menuOpen)} to="/product-page">PRODUCT PAGE</Link>
          </li>
          <li>
            <IconContext.Provider
              value={{ size: "1.5em", className: "global-class-name" }}
            >
              <Link>
                <AiOutlineShoppingCart />
              </Link>
            </IconContext.Provider>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
