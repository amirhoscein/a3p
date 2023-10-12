import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContextProvider";

const Navbarshape = () => {
  const { state } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: "#f4f4f4",
        padding: "15px 0",
        textAlign: "center",
        fontWeight: "600",
      }}
    >
      <div style={{ color: "black" }}>
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
      </div>
      <div style={{ position: "relative", color: "black" }}>
        <Link to="/cartshop">
          <div>shop</div>
        </Link>
        <span style={{ position: "absolute", top: "-8px", right: "-8px" }}>
          {state.itemsCounter}
        </span>
      </div>
    </div>
  );
};

export default Navbarshape;
