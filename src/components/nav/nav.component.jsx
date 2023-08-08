import style from './nav.module.css';

import jsLogo from '../../img/logo-javascript.svg';
import reactLogo from '../../img/logo-react.svg';
import cssLogo from '../../img/logo-css3.svg';
import htmlLogo from '../../img/logo-html5.svg';
import gitLogo from '../../img/logo-github.svg';

const Nav = () => {
  return (
    <nav className={style.landingNav}>
      <div className={style.landingNavNameBox}>
        <div className={style.landingNavName}>
          <h3 className={style.landingNavNameFirst}>J</h3>
          <h3 className={style.landingNavNameRest}>oao Matias</h3>
        </div>

        <div className={style.landingNavJobBox}>
          <h3 className={style.landingNavJob}>Junior FrontEnd Dev</h3>
          <div className={style.landingNavJobTech}>
            <img
              src={jsLogo}
              alt='Javascript Logo'
              className={style.landingNavJobTechLogos}
            />
            <img
              src={reactLogo}
              alt='React Logo'
              className={style.landingNavJobTechLogos}
            />
            <img
              src={cssLogo}
              alt='Css Logo'
              className={style.landingNavJobTechLogos}
            />
            <img
              src={htmlLogo}
              alt='HTML Logo'
              className={style.landingNavJobTechLogos}
            />
            <img
              src={gitLogo}
              alt='GitHub Logo'
              className={style.landingNavJobTechLogos}
            />
          </div>
        </div>
      </div>

      <div className={style.landingNavMenu}>
        <div>
          <h4 className={style.landingMenuTitles}>Projects</h4>
        </div>
        <div>
          <h4 className={style.landingMenuTitles}>Experience</h4>
        </div>
        <div>
          <h4 className={style.landingMenuTitles}>Education</h4>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
