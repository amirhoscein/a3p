import React, { useContext } from "react";
import styles from "../assets/css/branding.module.css";

import { BrandingContext } from "../context/BrandingProvider";

const Branding = () => {
  const { Branding, txtBrand, borderbrand } = styles;
  const brands = useContext(BrandingContext);

  return (
    <section className={Branding}>
      <div className="container">
        <div className="d-flex justify-content-around">
          {brands.map((limit) => (
            <div key={limit} className={`text-center ${borderbrand}`}>
              <div className={txtBrand}>
                <h3>{limit}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branding;
