import React from "react";
import { Link } from "react-router-dom";

// type script
import Gitwrite from "./Gitwrite";

import styles from "../assets/css/home.module.css";
import gift from "../assets/img/gift.png";

import Homecart from "./Homecart";
import Branding from "./Branding";
import Hometakhfif from "./Hometakhfif";
import Carosel from "./Carosel";

const Home = () => {
  const { home, headerHome, buymore, gifth, gifth2, gifth3 } = styles;

  return (
    <section className={home}>
      <div className={headerHome}>
        <Gitwrite />
      </div>
      <div className={buymore}>
        <h3>
          <Link to="/product">Buy Moooore</Link>
        </h3>
        <div className={gifth}>
          <img src={gift} alt="kk" />
        </div>
        <div className={gifth2}>
          <img src={gift} alt="kk" />
        </div>
        <div className={gifth3}>
          <img src={gift} alt="kk" />
        </div>
      </div>
      <Homecart />
      <Branding />
      <Hometakhfif />
      <Carosel />
    </section>
  );
};

export default Home;
