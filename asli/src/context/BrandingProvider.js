import React, { useEffect, useState, createContext } from "react";

import { getBranding } from "../services/apibranding";

export const BrandingContext = createContext();

const BrandingProvider = ({ children }) => {
  const [brand, setBrands] = useState([]);

  useEffect(() => {
    const fetchAPIBrand = async () => {
      setBrands(await getBranding());
    };
    fetchAPIBrand();
  }, []);
  return (
    <BrandingContext.Provider value={brand}>
      {children}
    </BrandingContext.Provider>
  );
};

export default BrandingProvider;
