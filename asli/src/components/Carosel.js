import React, { useContext } from "react";

import styles from "../assets/css/home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

import { LimitedContext } from "../context/LimitedapiProvider";
import Readmore from "./Readmore";

const Carosel = () => {
  const images = useContext(LimitedContext);
  return (
    <section className={styles.caroselHome}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Carousel>
              {images.map((img) => (
                <div key={img.id}>
                  <img src={img.image} />
                  <p className="legend">{img.category}</p>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className={styles.txtCarousel}>
              <h1>Carousel</h1>
              <Readmore>
                The href attribute is required for an anchor to be keyboard
                accessible. Provide a valid, navigable address as the href
                value. If you cannot provide an href, but still need the element
                to resemble a link, use a button and change it with appropriate
                stylesto resemble a link, use a button and change it with
                appropriate stylesto resemble a link, use a button and change it
                with appropriate stylesto resemble a link, use a button and
                change If you cannot provide an href but still need the element
                to resemble a link, use a button and change it with appropriate
                stylesto resemble it with appropriate styles not provide an
                href, but still need the element to resemble a link, use a
                button and change it with appropriate stylesto resemblea
                ppropriate styles not provide an href, but still need the
                element to resemble a link, use a button and change it with
                appropriate stylesto resembles not provide an href, but still
                need the element to resemble a link, use a button and change it
                with appropriate stylesto resemble
              </Readmore>

              {/* <button
                className={`btn btn-info ${styles.btnMore}`}
                type="button"
                onClick={handleClick}
              >
                More
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carosel;
