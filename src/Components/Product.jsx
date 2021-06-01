import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Product() {
  const products = useSelector((state) => state.allProducts.products);

  const renderProductsList = products.map((product, index) => (
    <div
      key={index}
      style={{ borderWidth: 2, borderColor: "blueviolet", margin: 10 }}
    >
      <Link to={`/product/${product.id}`}>
        <div>
          <div>
            <div>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: 200, height: 200 }}
              />
            </div>

            <div>
              <div>{product.title}</div>
              <div>$ {product.price}</div>
              <div>{product.category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));
  return <React.Fragment>{renderProductsList}</React.Fragment>;
}
