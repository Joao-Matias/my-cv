import style from './landing.module.css';

import Nav from '../nav';

const Landing = () => {
  return (
    <header className={style.landingContainer}>
      <Nav />
      <section></section>
    </header>
  );
};

export default Landing;
