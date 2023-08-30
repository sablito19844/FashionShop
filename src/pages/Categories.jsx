import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesHeader from "../components/CategoriesHeader";
import Footer from "../components/Footer";

const Categories = () => {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Categories;
