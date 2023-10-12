import React, { useContext } from "react";
import { Link } from "react-router-dom";
import stayles from "../assets/css/home.module.css";
// context
import { CartContext } from "../context/CartContextProvider";

// helper
import { shorten, isInCart, quantityCount } from "./helpers";

const ShapeProduct = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <>
      <div className={stayles.shapeepro}>
        <img src={productData.image} alt="product" />
        <h4>{shorten(productData.title)}</h4>
        <p>{productData.price}</p>
        <div className={stayles.btndetalis}>
          <Link to={`/product/${productData.id}`}>Details</Link>
          <div className={stayles.btnColor}>
            {isInCart(state, productData.id) ? (
              <button
                className={`btn btn-success ${stayles.marginERight}`}
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
              >
                +
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productData })
                }
              >
                add to cart
              </button>
            )}
            {quantityCount(state, productData.id) > 1 && (
              <button
                className="btn btn-danger"
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
              >
                -
              </button>
            )}

            {quantityCount(state, productData.id) === 1 && (
              <button
                className="btn btn-info"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                remove
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShapeProduct;
