import React, { useContext } from "react";

import { ProductsContext } from "../context/ProductContextProvider";
import { useParams } from "react-router-dom";

const ProductDetailes = () => {
  const { id } = useParams();

  const data = useContext(ProductsContext);

  const prduct = data[id - 1];

  const { image, title, description, price, category } = prduct;

  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="container" style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          margin: "30px 0",
          justifyContent: "space-between",
        }}
      >
        <img style={{ width: " 500px" }} src={image} alt="produc" />
        <div style={{ width: "45%" }}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <span>Category</span>
            {category}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{price} $</span>
            <input
              className="btn btn-success"
              type="button"
              value="Back"
              onClick={goBack}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailes;
