import React, { useEffect, useState } from "react";
import style from "./experience.module.css";
import { TbPointFilled } from "react-icons/tb";
// import { Link } from "react-router-dom";

import getExperienceOptions from "../../services/get-experience-options";

const Experience = () => {
  const experiences = getExperienceOptions();
  const [scrollTop, setScrollTop] = useState(0);
  // const [readMore, setReadMore] = useState(
  //   experiences.map((job, i) => {
  //     return { openText: false, number: i };
  //   })
  // );

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleReadMoreClick = (i) => {
  //   setReadMore((prevState) => {
  //     const fullState = prevState.map((state) => {
  //       if (state.number === i) {
  //         return { openText: true, number: state.number };
  //       } else {
  //         return state;
  //       }
  //     });

  //     return fullState;
  //   });
  // };

  // const handleReadLessClick = (i) => {
  //   setReadMore((prevState) => {
  //     const fullState = prevState.map((state) => {
  //       if (state.number === i) {
  //         return { openText: false, number: state.number };
  //       } else {
  //         return state;
  //       }
  //     });

  //     return fullState;
  //   });
  // };

  return (
    <section className={style.experienceContainer}>
      <div className={style.experienceContainerHeader}>
        <h2 className={style.experienceContainerNumeral}>02</h2>
        <h2 className={style.experienceContainerTitle}> Experience</h2>
      </div>
      <div className={style.experiencesContainer}>
        {experiences.map((experience, i) => {
          return (
            <div className={style.experiencesBox} key={i}>
              <div
                className={
                  scrollTop >= experience.intoView
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
                  scrollTop >= experience.intoView
                    ? style.experiencesCompanyContAnimation
                    : style.experiencesCompanyCont
                }
              >
                <div className={style.experiencesCompanyBox}>
                  <span className={style.experiencesCompany}>
                    {experience.company}
                  </span>
                </div>
                {/* {!readMore[i].openText ? (
                  <Link
                    onClick={() => {
                      handleReadMoreClick(i);
                    }}
                    className={style.readMore}
                  >
                    <span className={style.readMoreText}>Read More...</span>
                  </Link>
                ) : (
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
                    <Link
                      onClick={() => {
                        handleReadLessClick(i);
                      }}
                      className={style.readMore}
                    >
                      <span className={style.readMoreText}>Read Less...</span>
                    </Link>
                  </ul>
                )} */}
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
