import React, { useEffect, useState } from "react";

import style from "./nav.module.css";

import userImg from "../../img/JMatias-pic.jpg";

import { IconContext } from "react-icons";
import { BsList } from "react-icons/bs";

import { AiOutlineCloseCircle } from "react-icons/ai";

const Nav = (props) => {
  const { scrollTop } = props;
  const [isMobile, setIsMobile] = useState(false);
  const [showListHandler, setShowListHandler] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 375) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });

  const scrollToViewStart = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToViewProjects = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 747, behavior: "smooth" });
  };

  const scrollToViewExperiences = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 1687, behavior: "smooth" });
  };

  const scrollToViewEducation = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 3176, behavior: "smooth" });
  };

  const scrollToViewContact = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 3821, behavior: "smooth" });
  };

  return (
    <header
      className={scrollTop >= 710 ? style.landingNavStick : style.landingNav}
    >
      <div className={style.landingNavNameBox}>
        <div onClick={scrollToViewStart} className={style.landingNavName}>
          <div className={style.landingImgBox}>
            <img
              src={userImg}
              alt="This cv creator"
              className={
                scrollTop >= 710 ? style.landingImgStick : style.landingImg
              }
            />
          </div>
          <h3
            className={
              scrollTop >= 710
                ? style.landingNavNameFirstStick
                : style.landingNavNameFirst
            }
          >
            J
          </h3>
          <h3 className={style.landingNavNameRest}>oao Matias</h3>
        </div>

        <div className={style.landingNavJobBox}>
          <h3 className={style.landingNavJob}>Junior FrontEnd Dev</h3>
        </div>
      </div>

      <nav className={style.landingNavMenu}>
        {isMobile ? (
          <ul className={style.landingNavMenuList}>
            <li className={style.landingNavMenuBox}>
              <button
                className={style.landingMenuTitles}
                onClick={scrollToViewProjects}
              >
                Projects
              </button>
            </li>
            <li className={style.landingNavMenuBox}>
              <button
                className={style.landingMenuTitles}
                onClick={scrollToViewExperiences}
              >
                Experience
              </button>
            </li>
            <li className={style.landingNavMenuBox}>
              <button
                className={style.landingMenuTitles}
                onClick={scrollToViewEducation}
              >
                Education
              </button>
            </li>
            <li className={style.landingNavMenuBox}>
              <button
                className={style.landingMenuTitles}
                onClick={scrollToViewContact}
              >
                Contact
              </button>
            </li>
          </ul>
        ) : (
          <>
            <div
              onClick={() => {
                setShowListHandler((prevState) => {
                  return !prevState;
                });
              }}
              className={
                !showListHandler
                  ? style.landingNavMenuListIcon
                  : style.landingNavMenuListIconHidden
              }
            >
              <IconContext.Provider value={{ color: "#14213d", size: "4rem" }}>
                <BsList />
              </IconContext.Provider>
            </div>

            <ul
              className={
                showListHandler
                  ? style.landingNavMenuListMobile
                  : style.landingNavMenuListMobileHidden
              }
            >
              <div
                className={style.landingNavMenuListClose}
                onClick={() => {
                  setShowListHandler(false);
                }}
              >
                <IconContext.Provider
                  value={{ color: "#14213d", size: "1.5rem" }}
                >
                  <AiOutlineCloseCircle />
                </IconContext.Provider>
              </div>

              <li
                className={style.landingNavMenuListMobileTitle}
                onClick={scrollToViewProjects}
              >
                Projects
              </li>
              <li className={style.landingNavMenuListMobileTitle}>
                Experience
              </li>
              <li className={style.landingNavMenuListMobileTitle}>Education</li>
              <li className={style.landingNavMenuListMobileTitle}>Contact</li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Nav;
