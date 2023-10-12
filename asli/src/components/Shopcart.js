import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContextProvider";

import Smallcart from "./Smallcart";

const Shopcart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ width: "65%" }}>
        {state.selectedItems.map((item) => (
          <Smallcart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div
          style={{
            background: "#f9f5f5",
            padding: "20px 0",
            margin: "20px 0",
            borderRadius: "5px",
            height: "175px",
            textAlign: "center",
            width: "18%",
          }}
        >
          <p>
            <span>Total Items:</span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payment:</span>
            {state.total}
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              className="btn btn-success"
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Check Out
            </button>
            <button
              className="btn btn-info"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div>
          <h3>Check out successfully</h3>
          <Link to="/product">buy more</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <h3>want to buy</h3>
          <Link to="/product">get back</Link>
        </div>
      )}
    </div>
  );
};

export default Shopcart;
