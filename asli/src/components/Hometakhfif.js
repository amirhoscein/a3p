import React from "react";
import styles from "../assets/css/home.module.css";
import Countdownn from "./Countdownn";

const Hometakhfif = () => {
  return (
    <section className={styles.takhfif}>
      <span style={{ color: "#ffc107", fontWeight: "bold" }}>Discount</span>
      <p
        style={{
          margin: "0",
          textShadow: "2px -3px 3px black",
          overflow: "hidden",
          color: "#fff",
        }}
        id="demo"
      ></p>
      <div className={styles.txtclock}>
        <Countdownn />
      </div>
    </section>
  );
};

export default Hometakhfif;
