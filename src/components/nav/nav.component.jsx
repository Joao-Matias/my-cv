import style from './nav.module.css';

const Nav = () => {
  return (
    <header className={style.landingNav}>
      <div className={style.landingNavNameBox}>
        <div className={style.landingNavName}>
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
            {/* <a className={style.landingMenuTitles} href='#'> */}
            Projects
            {/* </a> */}
          </li>
          <li className={style.landingNavMenuBox}>
            {/* <a className={style.landingMenuTitles} href='#'> */}
            Experience
            {/* </a> */}
          </li>
          <li className={style.landingNavMenuBox}>
            {/* <a className={style.landingMenuTitles} href='#'> */}
            Education
            {/* </a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
