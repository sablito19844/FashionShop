import React from "react";
import "../components/Casualwear.css";
import { items } from "./AllData";
import { Link } from "react-router-dom";

const AllItem = () => {
  //  get all ids except some elements
  const elementToExclude = [23, 24];
  const filteredItems = items.filter(
    (item) => !elementToExclude.includes(item.id)
  );

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

export default AllItem;
