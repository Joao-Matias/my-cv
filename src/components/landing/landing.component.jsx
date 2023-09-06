import style from './landing.module.css';
import React, { useEffect, useState } from 'react';

import Nav from '../nav';
import userImg from '../../img/JMatias-pic.jpg';

import jsLogo from '../../img/logo-javascript.svg';
import reactLogo from '../../img/logo-react.svg';
import cssLogo from '../../img/logo-css3.svg';
import htmlLogo from '../../img/logo-html5.svg';
import gitLogo from '../../img/logo-github.svg';

const Landing = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={
        scrollTop >= 710 ? style.landingContainerExtra : style.landingContainer
      }
    >
      <Nav scrollTop={scrollTop} />
      <section className={style.landingHero}>
        <div className={style.landingImgBox}>
          <img
            src={userImg}
            alt='This cv creator'
            className={style.landingImgScaled}
          />
        </div>

        <div className={style.landingHeroDescription}>
          <p>Hello</p>
          <h2>
            My name is Joao Matias and I'm a self taught Frontend Dev.
            <br />
            I've always had an interest in web development and recently have
            decided to pursue this as a career. Througth a series of different
            courses, own projects and guidance from some web dev friends, I've
            been improving my codding skills and I'm now ready to embark in a
            new challenge.
            <br />
            <br />
            Exciting times ahead.
          </h2>
        </div>
      </section>

      <div className={style.landingJobTechBox}>
        <h1 className={style.landingJobHeading}>Tech Stack</h1>
        <div className={style.landingJobTech}>
          <img
            src={jsLogo}
            alt='Javascript Logo'
            className={style.landingJobTechLogos}
          />
          <img
            src={reactLogo}
            alt='React Logo'
            className={style.landingJobTechLogos}
          />
          <img
            src={cssLogo}
            alt='Css Logo'
            className={style.landingJobTechLogos}
          />
          <img
            src={htmlLogo}
            alt='HTML Logo'
            className={style.landingJobTechLogos}
          />
          <img
            src={gitLogo}
            alt='GitHub Logo'
            className={style.landingJobTechLogos}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
