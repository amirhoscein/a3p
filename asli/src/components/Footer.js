import React from "react";

import styles from "../assets/css/footer.module.css";

import { Link } from "react-router-dom";

import { SocialIcon } from "react-social-icons";

import logo from "../assets/img/Logo.svg";

const Footer = () => {
  const {
    bgFooter,
    containerFooter,
    logoFoot,
    titleFot,
    copyRight,
    socialMedia,
    containerFot,
  } = styles;

  return (
    <>
      <section className={bgFooter}>
        <div className={containerFooter}>
          <div className={logoFoot}>
            <Link to="/">
              <img src={logo} alt="icon" />
            </Link>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>

          <div className={titleFot}>
            <h4>Ref</h4>
            <a>CMS</a>
            <a>Designer</a>
            <a>SEO</a>
            <a>Editor</a>
          </div>
          <div className={titleFot}>
            <h4>Shop</h4>
            <a>Editor</a>
            <a>CMS</a>
          </div>
          <div className={titleFot}>
            <h4>Result</h4>
            <a>CMS</a>
            <a>Designer</a>
            <a>SEO</a>
            <a>Editor</a>
          </div>
        </div>
        <div className={copyRight}>
          <div className={containerFot}>
            <p>© Amirhussein 2023</p>
            <div className={socialMedia}>
              <SocialIcon
                network="x"
                url="https://twitter.com"
                style={{ marginRight: "7px", height: "45px", width: "45px" }}
              />
              <SocialIcon
                network="telegram"
                url="https://t.me/izamirhussein"
                style={{ marginRight: "7px", height: "45px", width: "45px" }}
              />
              <SocialIcon
                network="whatsapp"
                url="https://wa.me/qr/IEYWZ7POTHHWB1"
                style={{ marginRight: "7px", height: "45px", width: "45px" }}
              />
              <SocialIcon
                network="youtube"
                url="https://t.me/izamirhussein"
                style={{ marginRight: "7px", height: "45px", width: "45px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
