import React from 'react'
import "./Hero.css";
import Main1 from "../images/051.jpg";
import Main2 from "../images/formal wear/009.jpg";
import Main3 from "../images/sports wear/016.jpg";
import Main4 from "../images/Accessories/038.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="categories/casualWear">
                <div id="img1" className="lil-overlay"></div>
                <img src={Main1} alt="img1" />
                <p className="main-description">Casual Wear</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/formalWear">
                <div id="img2" className="lil-overlay"></div>
                <img src={Main2} alt="img2" />
                <p className="main-description">Formal Wear</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/sportswear">
                <div id="img3" className="lil-overlay"></div>
                <img src={Main3} alt="img3" />
                <p className="main-description">Sports Wear</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/accessories">
                <div id="img4" className="lil-overlay"></div>
                <img src={Main4} alt="img4" />
                <p className="main-description">Accessories</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero