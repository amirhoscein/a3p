import React, { useContext } from "react";

import { CartContext } from "../context/CartContextProvider";

import stayles from "../assets/css/home.module.css";

import { shorten } from "./helpers";
const Smallcart = (props) => {
  const { dispatch } = useContext(CartContext);

  const { image, title, price, quantity } = props.data;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 4px 1px",
        margin: "20px 0",
        alignItems: "center",
      }}
    >
      <img style={{ width: "100px" }} src={image} alt="produc" />
      <div style={{ display: "contents" }}>
        <h3 style={{ marginBottom: "0px" }}>{shorten(title)}</h3>
        <p style={{ marginBottom: "0px" }}>{price} $</p>
        <div>
          <span
            style={{
              borderRadius: "5px",
              background: "#478005",
              color: "#fff",
              padding: "2px",
            }}
          >
            {quantity}
          </span>
        </div>

        <div>
          {quantity > 1 ? (
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            >
              -
            </button>
          ) : (
            <button
              className="btn btn-info"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              remove
            </button>
          )}
          <button
            className={`btn btn-success ${stayles.marginERight}`}
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Smallcart;
