import React from 'react';

import style from './projects.module.css';

const Projects = () => {
  
const projects = []

  return (
    <section className={style.projectsContainer}>
      <header className={style.projectsContainerHeader}>
        <h1 className={style.projectsContainerNumeral}>01</h1>
        <h1 className={style.projectsContainerTitle}> Projects</h1>
      </header>
      <section></section>
    </section>
  );
};

export default Projects;
