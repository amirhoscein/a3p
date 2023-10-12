import React from "react";
import Typewriter from "typewriter-effect";

// import { Link } from "react-router-dom";
const Gitwrite = () => {
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingLeft: "80px",
        fontSize: "22px",
        fontFamily: "serif",
      }}
    >
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("A simple yet powerful native javascript")
            .pauseFor(300)
            .deleteChars(10)
            .typeString(
              "<strong><br/>Site</strong> plugin for a cool typewriter "
            )
            .typeString(
              " effect and<br/><strong>kharid bishtr cool react js</strong>"
            )
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
  );
};

export default Gitwrite;
