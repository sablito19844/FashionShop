
import React from 'react'
import AccessoriesItem from '../AccessoriesItem';
import "../../components/FormalWear.css"
const Accessories = () => {

  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Accessories Wears</h2>
      <div className="container">
        <div className="products-grid">
          <AccessoriesItem />
        </div>
      </div>
    </div>
  );
};
   
export default Accessories