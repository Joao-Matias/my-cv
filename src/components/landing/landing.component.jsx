import style from './landing.module.css';
import jsLogo from '../../img/logo-javascript.svg';
import reactLogo from '../../img/logo-react.svg';
import cssLogo from '../../img/logo-css3.svg';
import htmlLogo from '../../img/logo-html5.svg';
import gitLogo from '../../img/logo-github.svg';

const Landing = () => {
  return (
    <section className={style.landingContainer}>
      <nav className={style.landingNav}>
        <div className={style.landingNavNameBox}>
          <div className={style.landingNavName}>
            <h3 className={style.landingNavNameFirst}>J</h3>
            <h3 className={style.landingNavNameRest}>oao Matias</h3>
          </div>

          <div className={style.landingNavJobBox}>
            <h3 className={style.landingNavJob}>Junior Dev</h3>
            <h5 className={style.landingNavJobTech}>
              <img src={jsLogo} height='25px' width='25px' />
            </h5>
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
    </section>
  );
};

export default Landing;
