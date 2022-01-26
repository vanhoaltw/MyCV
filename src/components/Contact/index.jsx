/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { MENU_ROUTES } from "../../constant/routes";
import RowTitle from "../common/RowTitle";
import { ADMIN } from "../../constant/common";
import { ReactComponent as IconLocation } from "../../asset/icons/location.svg";
import { ReactComponent as IconEmail } from "../../asset/icons/email.svg";
import { ReactComponent as IconPhone } from "../../asset/icons/phone.svg";
import { useTranslation } from "react-i18next";
import ImageBye from "../../asset/image/bye.gif";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact" id={MENU_ROUTES.CONTACT.href}>
      <div className="content-container">
        <RowTitle
          title={t(MENU_ROUTES.CONTACT.title)}
          description={t(MENU_ROUTES.CONTACT.description)}
        />
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <a
                  target={"_blank"}
                  href="https://www.google.com/maps/place/Truong+Tho,+Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Ho+Chi+Minh+City,+Vietnam/@10.8323084,106.7393303,14z/data=!3m1!4b1!4m5!3m4!1s0x317527b2f62862a1:0xb763e72d56ba5711!8m2!3d10.832358!4d106.7559004"
                >
                  <IconLocation />
                </a>
                <div>
                  <h4>{t("contact-location")}:</h4>
                  <p>{t(ADMIN.ADDRESS)}</p>
                </div>
              </div>

              <div className="email">
                <a href={`mailto:${ADMIN.EMAIL}`}>
                  <IconEmail />
                </a>
                <div>
                  <h4>{t("contact-email")}:</h4>
                  <p>{ADMIN.EMAIL}</p>
                </div>
              </div>

              <div className="phone">
                <a href={`tel:${ADMIN.PHONE}`}>
                  <IconPhone />
                </a>
                <div>
                  <h4>{t("contact-call")}:</h4>
                  <p>{ADMIN.PHONE}</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31349.803785517142!2d106.73933026661916!3d10.832308407332262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527b2f62862a1%3A0xb763e72d56ba5711!2zVHJ1b25nIFRobywgVGjhu6cgxJDhu6ljLCBIbyBDaGkgTWluaCBDaXR5LCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1643198518059!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: "1px solid black", borderRadius: "5px" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-center justify-content-center">
            <img src={ImageBye} alt="Bye" style={{ marginLeft: "20px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
