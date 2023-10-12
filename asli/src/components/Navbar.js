import React from "react";

import { Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Product from "./Product";
import SignUp from "./SignUp";
import ProductDetailes from "./ProductDetailes";
// css
import styled from "styled-components";

// photo
import logo from "../assets/img/Logo.svg";
import user from "../assets/img/user.png";
import Logiin from "./Logiin";
import Shopcart from "./Shopcart";

const Ui = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 15;
  font-weight: bolder;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    padding: 18px 30px;
    a {
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: #5493ee !important;
        transition: all 0.3s linear;
      }
    }
    img {
      width: 25px;
      border-radius: 50%;
      border: 1px solid #000;
      padding: 3px;
      &:hover {
        box-shadow: 0 0 12px 3px;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    display: block !important;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    div {
      display: block !important;
    }
    li {
      padding: 12px 17px;
      font-size: 14px;
      a {
        color: #003d29 !important;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    background: #1565df;
    position: fixed;
    transition: all 0.3s linear;
    padding-top: 5rem;
    padding-bottom: 2rem;
    padding-left: 0;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    right: 0;
    height: 100vh;
    width: 300px;
    align-items: center;
    li {
      color: #fff;
    }
  }
`;

const Navbar = ({ open }) => {
  return (
    <>
      <div style={{ background: "#85cff9", color: "#341542" }}>
        <Ui open={open}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/signup">
                <img src={user} alt="user" />
              </Link>
            </li>
          </div>
        </Ui>
        <div style={{ background: "#fff" }}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetailes />} />
            <Route path="/cartshop" element={<Shopcart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Logiin />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Navbar;
