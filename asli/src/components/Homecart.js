import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "../assets/css/home.module.css";
// context
import { LimitedContext } from "../context/LimitedapiProvider";

//helper
import { shortCatgory } from "./helpers";
const Homecart = () => {
  const { hcart, cardHo } = styles;
  const carts = useContext(LimitedContext);
  return (
    <div className={hcart}>
      <div className="container">
        <div className="row">
          {carts.map((limit) => (
            <div className="col-md-4" key={limit.id}>
              <div className={`card ${cardHo}`}>
                <img src={limit.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{limit.category}</h5>
                  <p className="card-text">{shortCatgory(limit.description)}</p>
                  <Link to={`/product/${limit.id}`} className="btn btn-primary">
                    Click
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homecart;
