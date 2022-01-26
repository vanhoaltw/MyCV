/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { MENU_ROUTES } from "../../constant/routes";
import RowTitle from "../common/RowTitle";
import HandlerArray from "../../utils/handleArray";
import { projects } from "../../constant/projects";
import Isotope from "isotope-layout";
import { useTranslation } from "react-i18next";
import {ReactComponent as IconTech } from "../../asset/icons/IconTech.svg"
import {ReactComponent as IconLink } from "../../asset/icons/IconLink.svg"


const MyProject = () => {
  const [filter] = React.useState(
    HandlerArray.getListValue(projects, "type")
  );
  const { t } = useTranslation();
  const [isotope, setIsotope] = React.useState(null);
  const [typeActive, setTypeActive] = React.useState("*");
  React.useEffect(() => {
    setIsotope(
      new Isotope(".portfolio-container", {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      })
    );
  }, []);

  const handleSelectFilter = (type) => {
    setTypeActive(type?.toLowerCase());
    if (isotope) {
      isotope.arrange({
        filter: type === "*" ? type : `.${type?.toLowerCase()}`,
      });
    }
  };

  return (
    <section className="portfolio" id={MENU_ROUTES.PROJECT.href}>
      <div className="content-container">
        <RowTitle
          title={t(MENU_ROUTES.PROJECT.title)}
          description={t(MENU_ROUTES.PROJECT.description)}
        />

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filter">
              <li
                onClick={() => handleSelectFilter("*")}
                className={typeActive === "*" ? "filter-active" : ""}
              >
                {t("all")}
              </li>
              {filter.map((item, key) => (
                <li
                  className={
                    typeActive === item?.type?.toLowerCase()
                      ? "filter-active"
                      : ""
                  }
                  onClick={() => handleSelectFilter(item.type)}
                  key={key}
                >
                  {item.type}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {projects.map((item, key) => (
            <div
              key={key}
              className={`col-lg-4 col-md-6 portfolio-item ${item?.type?.toLowerCase()}`}
            >
              <div className="portfolio-wrap">
                <img
                  height={"100%"}
                  width={"100%"}
                  src={item.images[0]}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <h1>{item?.nameProject}</h1>
                  <h2>{item?.detailDescription}</h2> 
                  <p><IconTech/> {item?.skill}</p> 
                  {item?.link && 
                    <a target={"_blank"} href={item?.link}><IconLink className="mr-2"/> {t('watch-detail')}</a>
                  }
                </div>
              </div>
            </div>
          ))}
         </div>

      </div>

    </section>
  );
};

export default MyProject;
