import React, { useState } from "react";

import style from "./nav.module.css";

import userImg from "../../img/JMatias-pic.jpg";

import { IconContext } from "react-icons";
import { BsList } from "react-icons/bs";

import { AiOutlineCloseCircle } from "react-icons/ai";

const Nav = (props) => {
  const { scrollTop } = props;

  console.log(scrollTop);
  const [showListHandler, setShowListHandler] = useState(false);

  const width = window.innerWidth;

  const scrollToViewStart = (e) => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToViewProjects = (e) => {
    e.preventDefault();
    if (width > 1441) {
      window.scrollTo({ top: 880, behavior: "smooth" });
    }
    if (width < 1441) {
      window.scrollTo({ top: 880, behavior: "smooth" });
    }
    if (width < 1025) {
      window.scrollTo({ top: 880, behavior: "smooth" });
    }
    if (width < 769) {
      window.scrollTo({ top: 1070, behavior: "smooth" });
    }
    if (width < 376) {
      window.scrollTo({ top: 1143, behavior: "smooth" });
    }
  };

  const scrollToViewExperiences = (e) => {
    e.preventDefault();

    if (width > 1440) {
      window.scrollTo({ top: 1729, behavior: "smooth" });
    }
    if (width < 1441) {
      window.scrollTo({ top: 1729, behavior: "smooth" });
    }
    if (width < 1025) {
      window.scrollTo({ top: 1794, behavior: "smooth" });
    }
    if (width < 769) {
      window.scrollTo({ top: 2322, behavior: "smooth" });
    }
    if (width < 376) {
      window.scrollTo({ top: 2568, behavior: "smooth" });
    }
  };

  const scrollToViewEducation = (e) => {
    e.preventDefault();

    if (width > 1440) {
      window.scrollTo({ top: 3316, behavior: "smooth" });
    }
    if (width < 1441) {
      window.scrollTo({ top: 3430, behavior: "smooth" });
    }
    if (width < 1025) {
      window.scrollTo({ top: 3675, behavior: "smooth" });
    }
    if (width < 769) {
      window.scrollTo({ top: 4210, behavior: "smooth" });
    }
    if (width < 613) {
      window.scrollTo({ top: 4471, behavior: "smooth" });
    }
    if (width < 480) {
      window.scrollTo({ top: 4692, behavior: "smooth" });
    }
    if (width < 376) {
      window.scrollTo({ top: 4909, behavior: "smooth" });
    }
  };

  const scrollToViewContact = (e) => {
    e.preventDefault();

    if (width > 1440) {
      window.scrollTo({ top: 4030, behavior: "smooth" });
    }
    if (width < 1441) {
      window.scrollTo({ top: 4051, behavior: "smooth" });
    }
    if (width < 1025) {
      window.scrollTo({ top: 4162, behavior: "smooth" });
    }
    if (width < 769) {
      window.scrollTo({ top: 4705, behavior: "smooth" });
    }
    if (width < 613) {
      window.scrollTo({ top: 5051, behavior: "smooth" });
    }
    if (width < 477) {
      window.scrollTo({ top: 5393, behavior: "smooth" });
    }

    if (width < 376) {
      window.scrollTo({ top: 5512, behavior: "smooth" });
    }
  };

  const handleClickProjects = (e) => {
    scrollToViewProjects(e);
    setShowListHandler(false);
  };
  const handleClickExperiences = (e) => {
    scrollToViewExperiences(e);
    setShowListHandler(false);
  };
  const handleClickEducation = (e) => {
    scrollToViewEducation(e);
    setShowListHandler(false);
  };
  const handleClickContact = (e) => {
    scrollToViewContact(e);
    setShowListHandler(false);
  };

  return (
    <>
      <header className={style.landingNav}>
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
            <h1
              className={
                scrollTop >= 710
                  ? style.landingNavNameFirstStick
                  : style.landingNavNameFirst
              }
            >
              J
            </h1>
            <h1 className={style.landingNavNameRest}>oao Matias</h1>
          </div>

          <div className={style.landingNavJobBox}>
            <h2 className={style.landingNavJob}>Junior FrontEnd Dev</h2>
          </div>
        </div>

        <nav className={style.landingNavMenu}>
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
                onClick={(e) => {
                  handleClickProjects(e);
                }}
              >
                Projects
              </li>
              <li
                onClick={(e) => {
                  handleClickExperiences(e);
                }}
                className={style.landingNavMenuListMobileTitle}
              >
                Experience
              </li>
              <li
                onClick={(e) => {
                  handleClickEducation(e);
                }}
                className={style.landingNavMenuListMobileTitle}
              >
                Education
              </li>
              <li
                onClick={(e) => {
                  handleClickContact(e);
                }}
                className={style.landingNavMenuListMobileTitle}
              >
                Contact
              </li>
            </ul>
          </>
        </nav>
      </header>
      <div className={scrollTop >= 886 && style.landingNavStickCont} hidden>
        <header className={scrollTop >= 886 && style.landingNavStick} hidden>
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
              <h1
                className={
                  scrollTop >= 710
                    ? style.landingNavNameFirstStick
                    : style.landingNavNameFirst
                }
              >
                J
              </h1>
              <h1 className={style.landingNavNameRest}>oao Matias</h1>
            </div>

            <div className={style.landingNavJobBox}>
              <h2 className={style.landingNavJob}>Junior FrontEnd Dev</h2>
            </div>
          </div>

          <nav className={style.landingNavMenu}>
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
                <IconContext.Provider
                  value={{ color: "#14213d", size: "4rem" }}
                >
                  <BsList className={style.icon} />
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
                  onClick={(e) => {
                    handleClickProjects(e);
                  }}
                >
                  Projects
                </li>
                <li
                  onClick={(e) => {
                    handleClickExperiences(e);
                  }}
                  className={style.landingNavMenuListMobileTitle}
                >
                  Experience
                </li>
                <li
                  onClick={(e) => {
                    handleClickEducation(e);
                  }}
                  className={style.landingNavMenuListMobileTitle}
                >
                  Education
                </li>
                <li
                  onClick={(e) => {
                    handleClickContact(e);
                  }}
                  className={style.landingNavMenuListMobileTitle}
                >
                  Contact
                </li>
              </ul>
            </>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Nav;
