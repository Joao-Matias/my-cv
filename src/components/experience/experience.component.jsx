import React, { useEffect, useState, useRef } from 'react';
import style from './experience.module.css';
import { TbPointFilled } from 'react-icons/tb';

import getExperienceOptions from '../../services/get-experience-options';

const Experience = () => {
  const experiences = getExperienceOptions();
  const [scrollTop, setScrollTop] = useState(0);
  const titlesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const expRef = (el) => {
    if (el && !titlesRef.current.includes(el)) {
      titlesRef.current.push(el);
    }
  };

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
  });
  console.log(titlesRef);

  observer.observe(titlesRef[0]);

  return (
    <section className={style.experienceContainer}>
      <div className={style.experienceContainerHeader}>
        <h1 className={style.experienceContainerNumeral}>02</h1>
        <h1 className={style.experienceContainerTitle}> Experience</h1>
      </div>
      <div className={style.experiencesContainer}>
        {experiences.map((experience, i) => {
          return (
            <div className={style.experiencesBox} key={i}>
              <div
                ref={expRef}
                className={
                  scrollTop >= 1250
                    ? style.experiencesContAnimation
                    : style.experiencesCont
                }
              >
                <div className={style.experiencesYearsCont}>
                  <span className={style.experiencesYears}>
                    {experience.from}
                  </span>
                  <span className={style.experiencesYears}> - </span>
                  <span className={style.experiencesYears}>
                    {experience.to}
                  </span>
                </div>
                <div className={style.experiencesJobCont}>
                  <h3 className={style.experiencesJob}>{experience.title}</h3>
                </div>
              </div>
              <div className={style.experiencesBulletsCont}>
                <TbPointFilled className={style.experiencesBullets} />
              </div>
              <div
                className={
                  scrollTop >= 1250
                    ? style.experiencesCompanyContAnimation
                    : style.experiencesCompanyCont
                }
              >
                <div className={style.experiencesCompanyBox}>
                  <span className={style.experiencesCompany}>
                    {experience.company}
                  </span>
                </div>
                <ul className={style.experiencesResponsabilitiesCont}>
                  {experience.responsabilities.map((task, i) => {
                    return (
                      <li key={i}>
                        <p className={style.experiencesResponsabilities}>
                          {task}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
