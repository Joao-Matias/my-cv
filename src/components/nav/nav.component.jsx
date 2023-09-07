import React from 'react';

import style from './nav.module.css';

const Nav = (props) => {
  const { scrollTop } = props;

  const scrollToViewStart = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToViewProjects = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 747, behavior: 'smooth' });
  };

  const scrollToViewExperiences = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 1687, behavior: 'smooth' });
  };

  const scrollToViewEducation = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 3176, behavior: 'smooth' });
  };

  console.log(window.scrollY);

  return (
    <header
      className={scrollTop >= 710 ? style.landingNavStick : style.landingNav}
    >
      <div className={style.landingNavNameBox}>
        <div onClick={scrollToViewStart} className={style.landingNavName}>
          <h3 className={style.landingNavNameFirst}>J</h3>
          <h3 className={style.landingNavNameRest}>oao Matias</h3>
        </div>

        <div className={style.landingNavJobBox}>
          <h3 className={style.landingNavJob}>Junior FrontEnd Dev</h3>
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
            <button className={style.landingMenuTitles}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
