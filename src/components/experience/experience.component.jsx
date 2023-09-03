import React from 'react';
import style from './experience.module.css';
import { TbPointFilled } from 'react-icons/tb';

import getExperienceOptions from '../../services/get-experience-options';

const Experience = () => {
  const experience = getExperienceOptions();

  return (
    <section className={style.experienceContainer}>
      <div className={style.experienceContainerHeader}>
        <h1 className={style.experienceContainerNumeral}>02</h1>
        <h1 className={style.experienceContainerTitle}> Experience</h1>
      </div>
      <div className={style.experiencesContainer}>
        {experience.map((experience, i) => {
          return (
            <div className={style.experiencesBox} key={i}>
              <div>
                <span>{experience.from} '-'</span>
                <span>{experience.to}</span>
              </div>
              <div>
                <TbPointFilled className={style.experiencesBullets} />
              </div>
              <div>
                <h1>ola</h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
