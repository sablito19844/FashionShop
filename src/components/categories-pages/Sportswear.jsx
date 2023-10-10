
import React from 'react'
import SportsWearItem from '../SportsWearItem';
import "../../components/FormalWear.css"
const Sportswear = () => {

  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Sports Wears</h2>
      <div className="container">
        <div className="products-grid">
          <SportsWearItem />
        </div>
      </div>
    </div>
  );
};
   
export default Sportswear