import "./App.css";

import { BrowserRouter } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Burger from "./components/Burger";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

import Footer from "./components/Footer";
import LimitedapiProvider from "./context/LimitedapiProvider";
import BrandingProvider from "./context/BrandingProvider";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <LimitedapiProvider>
            <BrandingProvider>
              <BrowserRouter>
                <Burger />
                <Footer />
              </BrowserRouter>
            </BrandingProvider>
          </LimitedapiProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
