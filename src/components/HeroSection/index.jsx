import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import { ADMIN } from "../../constant/common";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      data-aos="fade-left"
      data-aos-duration="500"
      className="d-flex flex-column justify-content-center align-items-center"
      >      
      <div className="hero-container">
        <h1>{t(ADMIN.NAME)}</h1>
        <p>"
          <Typewriter
            options={{
              strings: ADMIN.slogan.map(slogan => t(slogan)),
              autoStart: true,
              loop: true,
            }}
          />"
        </p>
      </div>
      <div className="overlay"></div>
      <div
        style={{
          width: "100%",
          height: "0px",
          position: "relative",
          paddingBottom: "56.250%",
        }}
      >
        <iframe
          src="https://streamable.com/e/l1agsp?autoplay=1"
          frameBorder="0"
          title="Hello"
          width="100%"
          height="100%"
          allow="autoplay"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0px",
            top: "0px",
            overflow: "hidden",
          }}
        ></iframe>
      </div>
    </section>
  );
};

export default HeroSection;
