import React from "react";
import { MENU_ROUTES } from "../../constant/routes";
import RowTitle from "../common/RowTitle";
import SKILL from "../../constant/skill";
import { useTranslation } from "react-i18next";
const Skill = () => {
  const { t } = useTranslation();
  return (
    <section className="skill" id={MENU_ROUTES.SKILL.href}>
      <div className="content-container">
        <RowTitle
          title={t(MENU_ROUTES.SKILL.title)}
          description={t(MENU_ROUTES.SKILL.description)}
        />
        <div>
          {SKILL.map((skill, key) => (
            <div
            key={key}
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              className="skill-row"
            >
              <span>{skill.title}</span>
              <div
                style={{ gap: "25px" }}
                className="skill-wrap mb-3 d-flex flex-wrap flex-row justify-content-center align-items-center"
              >
                {skill.skills.map((item, key) => (
                  <img
                    className="skill-img"
                    key={key}
                    src={item.image}
                    alt={item.name}
                    height={50}
                    width={50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
