import React, { useEffect, createContext, useState } from "react";

// api
import { getProductslimit } from "../services/apilimit";

export const LimitedContext = createContext();

const LimitedapiProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchAPILimit = async () => {
      setCarts(await getProductslimit());
    };
    fetchAPILimit();
  }, []);

  return (
    <LimitedContext.Provider value={carts}>{children}</LimitedContext.Provider>
  );
};

export default LimitedapiProvider;
