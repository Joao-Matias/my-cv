import style from './nav.module.css';

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
        </div>
      </div>

      <div className={style.landingNavMenu}>
        <div className={style.landingNavMenuBox}>
          <h4 className={style.landingMenuTitles}>Projects</h4>
        </div>
        <div className={style.landingNavMenuBox}>
          <h4 className={style.landingMenuTitles}>Experience</h4>
        </div>
        <div className={style.landingNavMenuBox}>
          <h4 className={style.landingMenuTitles}>Education</h4>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
