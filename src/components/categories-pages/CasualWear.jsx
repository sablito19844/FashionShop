import React from 'react'
import CasualWearItem from '../CasualWearItem';
import "../../components/Casualwear.css"
const CasualWear = () => {

  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Casual Wears</h2>
      <div className="container">
        <div className="products-grid">
          <CasualWearItem />
        </div>
      </div>
    </div>
  );
};
   
export default CasualWear

