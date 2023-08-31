import React from 'react';

import style from './projects.module.css';
import getProjectsOptions from '../../services/get-projects-options';

const Projects = () => {
  const options = getProjectsOptions();

  return (
    <section className={style.projectsContainer}>
      <header className={style.projectsContainerHeader}>
        <h1 className={style.projectsContainerNumeral}>01</h1>
        <h1 className={style.projectsContainerTitle}> Projects</h1>
      </header>
      {options.map((project) => {
        return (
          <section className={style.projectCont}>
            <div></div>
            <div>
              <video autoPlay loop muted>
                <source src={project.icon} type='video/mp4' />
              </video>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Projects;
