
import React from 'react'
import AllItem from '../AllItem';
import "../../components/FormalWear.css"
const All = () => {

  return (
    <div className="proud-container">
      <h2 className="container proud-h2">All Products</h2>
      <div className="container">
        <div className="products-grid">
          <AllItem />
        </div>
      </div>
    </div>
  );
};
   
export default All