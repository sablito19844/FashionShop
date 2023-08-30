import React from "react";
import { Link } from "react-router-dom";
import "../components/CategoriesHeader.css";
import Footer from "./Footer";
import "./Footer.css";
const CategoriesHeader = () => {
  return (
    <>
      <div className="categoriesLink container">
        <Link to="all">All</Link>
        <Link to="casualWear">Casual Wear</Link>
        <Link to="formalWear">Formal Wear</Link>
        <Link to="sportswear">Sports Wear</Link>
        <Link to="accessories">Accessories</Link>
      </div>
    </>
  );
};

export default CategoriesHeader;
