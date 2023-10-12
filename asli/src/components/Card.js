import React from "react";
import Cardite from "./Cardite";

const Card = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Cardite
          header={"Amir Hossein"}
          lorem={"JavaScript & React Development"}
        />
        <Cardite header={"Ebi"} lorem={"HTML and CSS JavaScript"} />
        <Cardite header={"Majid Viz"} lorem={"Front End Development"} />
        <Cardite header={"Javad Eslami"} lorem={"Full Stack Programmer"} />
      </div>
    </>
  );
};

export default Card;
