/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTranslation } from "react-i18next";
import { ADMIN } from "../../constant/common";
import { MENU_ROUTES } from "../../constant/routes";
import Utils from "../../utils/handleArray";
import RowTitle from "../common/RowTitle";
import { ReactComponent as IconEnergy } from "../../asset/icons/energy.svg";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section className="about" id={MENU_ROUTES.ABOUT.href}>
      <div className="content-container">
        <RowTitle
          title={t(MENU_ROUTES.ABOUT.title)}
          description={t(MENU_ROUTES.ABOUT.description)}
        />

        <div className="row">
          <div className="col-lg-4 about__left" data-aos-duration="500" data-aos="fade-right">
            <img src={ADMIN.AVATAR} className="img-fluid mb-3" alt="" />
            <h4>{t(ADMIN.NAME)}</h4>
            <h6>{ADMIN.BIRTHDAY}</h6>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos-duration="500" data-aos="fade-left">
            <h3>{t("about-position")}</h3>

            <p className="fst-italic">{t("about-slogan")}</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <IconEnergy />
                    <strong>{t("about-birthday")}:</strong>{" "}
                    <span>{ADMIN.BIRTHDAY}</span>
                  </li>
                  <li>
                    <IconEnergy />
                    <strong>{t("about-phone")}:</strong>{" "}
                    <span><a href={`tel:${ADMIN.PHONE}`}>{ADMIN.PHONE}</a></span>
                  </li>
                  <li>
                    <IconEnergy />
                    <strong>{t("about-address")}:</strong>{" "}
                    <span>{t(ADMIN.ADDRESS)}</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <IconEnergy />
                    <strong>{t("about-age")}:</strong>{" "}
                    <span>{Utils.getAgeCurrent(ADMIN.BIRTHDAY)}</span>
                  </li>
                  <li>
                    <IconEnergy />
                    <strong>{t("about-email")}:</strong>{" "}
                    <span><a href={`mailto:${ADMIN.EMAIL}`}>{ADMIN.EMAIL}</a></span>
                  </li>
                  <li>
                    <IconEnergy />
                    <strong>{t("about-experience")}:</strong>{" "}
                    <span>
                      {ADMIN.EXPERIENT
                        ? t("about-experienced")
                        : t("about-no-experience")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="objective">
              <label>
                <strong>{t("about-objective-short")}: </strong>
              </label>
              <p>{t("about-objective-short-content")}</p>
            </div>

            <div className="objective">
              <label>
                <strong>{t("about-objective-long")}: </strong>
              </label>
              <p>{t("about-objective-long-content")}</p>
            </div>

            <div className="row education" data-aos-duration="500" data-aos="fade-right"
     data-aos-easing="ease-in-sine">
              <div className="col-2">
                <img
                  src={ADMIN.EDUCATION.image}
                  alt={ADMIN.EDUCATION.school}
                  height={80}
                  width={70}
                />
              </div>
              <div className="col-10">
                <h1>{t(ADMIN.EDUCATION.school)}</h1>

                <div className="education__item">
                  <label>{t("about-year")}:</label>
                  <p>{t(ADMIN.EDUCATION.year)}</p>
                </div>
                <div className="education__item">
                  <label>{t("about-major")}:</label>
                  <p>{t(ADMIN.EDUCATION.major)}</p>
                </div>
                <div className="education__item">
                  <label>{t("about-subject")}:</label>
                  <ul>
                    {ADMIN.EDUCATION.subject.map((sub, key) => (
                      <li key={key}>{t(sub)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
