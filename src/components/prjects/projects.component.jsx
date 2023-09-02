import React from 'react';
import { Link } from 'react-router-dom';
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
      {options.map((project, i) => {
        return (
          <section key={i} className={style.projectCont}>
            <div className={style.projectImgs}>
              {/* <video className={style.projectVideoCont} autoPlay loop muted>
                <source src={project.gif} type={project.type} />
              </video> */}

              <img src={project.icon} />
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Projects;
