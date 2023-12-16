import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './projects.module.css';
import getProjectsOptions from '../../services/get-projects-options';

import gitLogo from '../../img/logo-github.svg';

const Projects = () => {
  const [selectedPrj, setSelectedPrj] = useState({
    id: 'initial',
    title: 'Select a project',
    appDescription: [
      { text: 'You will find my projects here' },
      { text: 'click in any to find more information about them' },
    ],
    techDescription: [],
  });

  const id = Date.now();

  const options = getProjectsOptions();

  return (
    <section className={style.projectsContainer}>
      <div className={style.projectsContainerHeader}>
        <h2 className={style.projectsContainerNumeral}>01</h2>
        <h2 className={style.projectsContainerTitle}> Projects</h2>
      </div>
      <section className={style.projectCont}>
        <div key={id} className={style.projectTextBox}>
          <div className={style.projectTextCont}>
            <div className={style.projectTextTitleCont}>
              {selectedPrj.id === 'initial' ? (
                <div>
                  <h3 className={style.projectTextTitle}>
                    {selectedPrj.title}
                  </h3>
                </div>
              ) : (
                <Link
                  className={style.projectButtonCont}
                  to={selectedPrj.link}
                  target='_blank'
                >
                  <h3 className={style.projectTextTitle}>
                    {selectedPrj.title}
                  </h3>
                </Link>
              )}
            </div>
            <div className={style.projectTextDescriptionCont}>
              <ul className={style.projectTextDescription}>
                {selectedPrj.appDescription.map((desc, i) => {
                  return (
                    <li className={style.projectTextDescription} key={i}>
                      {desc.text}
                    </li>
                  );
                })}
              </ul>
              <ul className={style.projectTextDescription}>
                {selectedPrj.techDescription.map((desc, i) => {
                  return (
                    <li className={style.projectTextDescription2} key={i}>
                      {desc.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={style.projectLinkCont}>
            {!selectedPrj.git ? (
              ''
            ) : (
              <>
                <div className={style.projectGitCont}>
                  <Link to={selectedPrj.git} target='_blank'>
                    <img
                      className={style.projectGit}
                      src={gitLogo}
                      alt='Git Logo'
                    />
                  </Link>
                </div>
                <Link
                  className={style.projectVisitBox}
                  to={selectedPrj.link}
                  target='_blank'
                >
                  <p className={style.projectVisit}>
                    Go to {selectedPrj.title}
                  </p>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className={style.projectImgsBox}>
          {options.map((project, i) => {
            return (
              <div
                onClick={
                  selectedPrj.title === project.title
                    ? () => {}
                    : () => {
                        setSelectedPrj(project);
                      }
                }
                key={i}
                className={style.projectImgCont}
              >
                <img
                  className={
                    selectedPrj.title === project.title
                      ? style.projectImgScaled
                      : style.projectImg
                  }
                  alt={project.alt}
                  src={project.icon}
                />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Projects;
