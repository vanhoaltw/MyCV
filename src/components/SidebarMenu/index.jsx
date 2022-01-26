/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ADMIN } from "../../constant/common";
import { MENU_ROUTES, SOCIAL_ROUTES } from "../../constant/routes";
import { ReactComponent as IconArrow } from "../../asset/icons/IconArrow.svg";

import { ContextApp } from "../../context/appContext";
import CountViewer from "../common/CountViewer";
const SidebarMenu = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { t } = useTranslation();
  const sidebarRef = React.useRef();
  const indicatorRef = React.useRef();
  const { showMenu, setShowMenu } = useContext(ContextApp);

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(".nav-link");
      indicatorRef.current.style.height = `${sidebarItem.clientHeight + 20}px`;
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.href.split("/#")[1];
    const activeItem = Object.keys(MENU_ROUTES)
      .map((item) => MENU_ROUTES[item].href)
      .indexOf(curPath);
    setActiveIndex(curPath?.length === 0 || activeItem === -1 ? 0 : activeItem);
  }, [activeIndex]);

  return (
    <header
      style={{ left: !showMenu ? "-300px" : 0 }}
      id="header-side"
      className="side-bar-menu"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        className="side-bar-menu-close"
      >
        <span
          onClick={() => setShowMenu((pre) => !pre)}
          className={showMenu && "close-menu"}
        >
          <IconArrow />
        </span>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        className="d-flex flex-column"
      >
        <CountViewer views={0} />
        <div className="profile">
          <img
            src={ADMIN.AVATAR}
            alt={ADMIN.NULL_AVATAR}
            className="img-fluid rounded-circle"
          />
          <div>
            <h1 className="text-light">
              <a>{t(ADMIN.NAME)}</a>
            </h1>
            <label>{ADMIN.BIRTHDAY}</label>
            <div className="social-links mt-2">
              {Object.keys(SOCIAL_ROUTES).map((link, key) => (
                <a title={SOCIAL_ROUTES[link].name} target={"_blank"} href={SOCIAL_ROUTES[link].href} key={key}>
                  {SOCIAL_ROUTES[link].icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul ref={sidebarRef}>
            <div
              ref={indicatorRef}
              className="nav-menu-indicator"
              style={{
                transform: `translateX(-60%)  translateY(${
                  activeIndex > -1 ? activeIndex * 100 : 1
                }%)`,
              }}
            ></div>
            {Object.keys(MENU_ROUTES).map((item, key) => (
              <li key={key}>
                <a
                  href={`#${MENU_ROUTES[item]?.href || ""}`}
                  className={`nav-link scrollto ${
                    activeIndex === key ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(key)}
                >
                  {MENU_ROUTES[item]?.icon}
                  <span>{t(MENU_ROUTES[item]?.name)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SidebarMenu;
