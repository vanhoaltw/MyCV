/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useTranslation } from "react-i18next";
import { ADMIN } from "../../constant/common";
import { MENU_ROUTES } from "../../constant/routes";
import RowTitle from "../common/RowTitle";
import {ReactComponent as IconTech } from '../../asset/icons/IconTech.svg'
import {ReactComponent as IconRole } from '../../asset/icons/IconRole.svg'
import {ReactComponent as IconLearn } from '../../asset/icons/IconLearn.svg'
import {ReactComponent as IconCompany } from '../../asset/icons/IconCompany.svg'

const Education = () => {
  const {t} = useTranslation()
  return (
    <section className="resume" id={MENU_ROUTES.EXPRIENCE.href}>
      <div className="content-container">
        <RowTitle title={t(MENU_ROUTES.EXPRIENCE.title)} description={t(MENU_ROUTES.EXPRIENCE.description)}/>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">{t(ADMIN.RESUME.activity.title)}</h3>
            {
              ADMIN.RESUME.activity.content.map((act, key)=>(
                <div key={key} className="resume-item">
                  <h4>{act?.name}</h4>
                  {act?.time && <h5>{act?.time}</h5>}
                  <p><em>"{act?.description}"</em></p>
                  <ul>
                    <li><IconCompany/>{act?.company}</li>
                    {act?.role && <li><IconRole/>{"  "}{act?.role}</li>}                    
                    <li><IconLearn/>{act?.skill}</li>
                  </ul>
                </div>
              ))
            }

            <h3 className="resume-title">{t(ADMIN.RESUME.education.title)}</h3>
            {
              ADMIN.RESUME.education.content.map((act,key)=>(
                <div key={key} className="resume-item">
                  <h4>{act?.name}</h4>
                  <h5>{act?.time}</h5>
                  <p><em>"{act?.description}"</em></p>
                  <ul>
                    <li><IconRole/>{act?.role}</li>
                  </ul>
                </div>
              ))
            }
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">{t(ADMIN.RESUME.work.title)}</h3>
            {
              ADMIN.RESUME.work.content.map((act,key)=>(
                <div className="resume-item" key={key}>
                  <h4>{act?.name} {act?.link && <a target="_blank" href={act?.link}>See website</a>} </h4>
                  <h5>{act?.time}</h5>
                  <p><em>"{act?.description}"</em></p>
                  <ul>
                    <li><IconCompany/>{act?.company}</li>
                    <li><IconRole/>{act?.role}</li>
                    <li><IconLearn/>{act?.skill}</li>
                    {act?.tech && <li><IconTech/>{"  "}{act?.tech}</li>}                    
                  </ul>                                    
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
