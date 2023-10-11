import "./ProudProducts.css";
import { items } from "./AllData";
import { Link } from "react-router-dom";

function ProductItem() {
  const specificProduct = [2,4,7,17,30,35,37,36]
  const filteredItems = items.filter((item) => specificProduct.includes(item.id)); 
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="product normal">
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div className="product-header">
              <img src={item.img} alt="product1" />
            </div>
            <div className="product-details">
              <p>{item.description}</p>
              <p className="item-price">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductItem;
