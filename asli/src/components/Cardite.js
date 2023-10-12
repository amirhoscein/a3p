import React from "react";
import pic from "../assets/img/cardPIC.png";
import styles from "../assets/css/about.module.css";

const Cardite = (props) => {
  const { header, lorem } = props;
  return (
    <div
      className={styles.cardItem}
      style={{
        textAlign: "center",
        background: "#f6f6f6",
        borderRadius: " 10px",
        paddingBottom: "8px",
      }}
    >
      <img
        style={{ width: "226px", borderRadius: "10px 10px 0 0" }}
        src={pic}
        alt="pic"
      />
      <h3>{header}</h3>
      <p style={{ margin: "0 auto", fontSize: "13px", width: "81%" }}>
        {lorem}
      </p>
    </div>
  );
};

export default Cardite;
