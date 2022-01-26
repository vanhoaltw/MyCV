/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { MENU_ROUTES } from "../../constant/routes";
import RowTitle from "../common/RowTitle";
import { certificates } from "../../constant/certificates";
import { useTranslation } from "react-i18next";

const Certificate = () => {
  const {t} = useTranslation()
  return (
    <section className="certificate" id={MENU_ROUTES.CERTIFICATE.href}>
      <div className="content-container">
        <RowTitle title={t(MENU_ROUTES.CERTIFICATE.title)} description={t(MENU_ROUTES.CERTIFICATE.description)} />
        <div className="row">
            {
                certificates.map((item,key)=>(
                    <div className="col-lg-6 col-md-6 row certificate-item" key={key}>
                        <div className="col-4 image">
                            <img height={"100%"} width={"100%"} src={item.image} alt=""/>
                        </div>
                        <div className="col-7 content">
                            <a href={item.link} target='_blank'>{item.lession}</a>
                            <p>{item.company}</p>
                            <p className="date">{item.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Certificate;
