import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './projects.module.css';
import getProjectsOptions from '../../services/get-projects-options';

import gitLogo from '../../img/logo-github.svg';

const Projects = () => {
  const [selectedPrj, setSelectedPrj] = useState({
    id: 'initial',
    title: 'Select a project',
    description:
      'You will find my projects here, click in any to find more information about them.',
  });

  const id = Date.now();

  const options = getProjectsOptions();

  return (
    <section className={style.projectsContainer}>
      <div className={style.projectsContainerHeader}>
        <h1 className={style.projectsContainerNumeral}>01</h1>
        <h1 className={style.projectsContainerTitle}> Projects</h1>
      </div>
      <section className={style.projectCont}>
        <div key={id} className={style.projectTextBox}>
          <div className={style.projectTextCont}>
            <div className={style.projectTextTitleCont}>
              {selectedPrj.id === 'initial' ? (
                <div>
                  <h2 className={style.projectTextTitle}>
                    {selectedPrj.title}
                  </h2>
                </div>
              ) : (
                <Link
                  className={style.projectButtonCont}
                  to={selectedPrj.link}
                  target='_blank'
                >
                  <h2 className={style.projectTextTitle}>
                    {selectedPrj.title}
                  </h2>
                </Link>
              )}
            </div>
            <div className={style.projectTextDescriptionCont}>
              <p className={style.projectTextDescription}>
                {selectedPrj.description}
              </p>
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
                  to={selectedPrj.git}
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
