import style from './landing.module.css';
import React from 'react';

import Nav from '../nav';
import userImg from '../../img/JMatias-pic.jpg';

const Landing = () => {
  return (
    <header className={style.landingContainer}>
      <Nav />
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
    </header>
  );
};

export default Landing;
