import React, { useContext, useState } from "react";

import ShapeProduct from "./ShapeProduct";

import Navbarshape from "./Navbarshape";

// use context
import { ProductsContext } from "../context/ProductContextProvider";

const Product = () => {
  const products = useContext(ProductsContext);

  const [search, setSearch] = useState("");

  return (
    <>
      <Navbarshape />

      <div className="mt-3 mx-auto" style={{ width: "50%" }}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Searching"
        />
      </div>

      <div className="container">
        <div className="mt-5">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {products
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((prduct) => (
                <ShapeProduct key={prduct.id} productData={prduct} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
