import React from 'react'
import { items } from "./AllData";
import { Link } from "react-router-dom";
import "../components/Casualwear.css"

const SportsWearItem = () => {
   
    // get ids between tow ranges
   
   const minRange = 15;
   const maxRange = 22;
   const filteredItems = items.filter((item) => {
     return item.id >= minRange && item.id <= maxRange;
   });
   
 
   return (
     <>
       {filteredItems.map((item) => (
         <div key={item.id} className="row-item">
           <Link
             onClick={() => window.top(0, 0)}
             to={`/categories/product/${item.id}`}
           >
             <div className="item-Header">
               <img src={item.img} alt="product" />
             </div>
             <div className="item-description">
               <p>{item.description}</p>
               <p className="item-price">{item.price}$</p>
             </div>
           </Link>
         </div>
       ))}
     </>
   );
 };
 

export default SportsWearItem

