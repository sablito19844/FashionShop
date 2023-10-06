import React from "react";
import "./TrendingSlider.css";
import { items } from "./AllData";
import { Link } from "react-router-dom";

const TrendingItem = () => {
  // extract specific IDs
  const specificIds = [4, 6, 17, 26, 29, 31, 33, 34, 36];
  const filteredItems = items.filter((item) => specificIds.includes(item.id));

  // get ids between tow ranges
  /*
  const minRange = 3;
  const maxRange = 10;
  const filteredItems = items.filter((item) => {
    return item.id >= minRange && item.id <= maxRange;
  });
  */


 //  get ids from 1 to 8
  /* const filteredItems = items.filter((item) => item.id >= 8); */

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div className="item-header">
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

export default TrendingItem;
