
import React from 'react'
import FormalWearItem from '../FormalWearItem';
import "../../components/FormalWear.css"
const FormalWear = () => {

  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Formal Wears</h2>
      <div className="container">
        <div className="products-grid">
          <FormalWearItem />
        </div>
      </div>
    </div>
  );
};
   
export default FormalWear