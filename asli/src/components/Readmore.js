import React, { useState } from "react";
import styles from "../assets/css/home.module.css";
const Readmore = ({ children }) => {
  const text = children;
  const [read, setRead] = useState(true);

  const handleClick = () => {
    setRead(!read);
  };
  return (
    <p>
      {read ? text.slice(0, 245) : text}
      <span onClick={handleClick} className={styles.readOrHide}>
        {read ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default Readmore;
