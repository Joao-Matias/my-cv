import style from './contact.module.css';

import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className={style.contactContainer}>
      <div className={style.contactBox}>
        <div className={style.contactTextBox}>
          <div className={style.contactContainerHeader}>
            <h1 className={style.contactContainerNumeral}>04</h1>
            <h1 className={style.contactContainerTitle}> Contact</h1>
          </div>
          <p className={style.contactParagraph}>
            Drop me an email and let's discuss any question that you might have.
            Also have a look at my X account where I update my recent activity
            in my coding journey.
          </p>
          <div className={style.contactLinks}>
            <div className={style.contactGitBox}>
              <IconContext.Provider value={{ color: '#e5e5e5', size: '4rem' }}>
                <Link to={'https://github.com/Joao-Matias'} target='_blank'>
                  <AiFillGithub />
                </Link>
              </IconContext.Provider>
            </div>
            <div className={style.contactLinkedinBox}>
              <IconContext.Provider value={{ color: '#e5e5e5', size: '4rem' }}>
                <Link
                  to={'https://www.linkedin.com/in/jo%C3%A3o-matias-93b638129/'}
                  target='_blank'
                >
                  <AiFillLinkedin />
                </Link>
              </IconContext.Provider>
            </div>
            <div className={style.contactLinkedinBox}>
              <IconContext.Provider value={{ color: '#e5e5e5', size: '4rem' }}>
                <Link to={'https://twitter.com/JoaoDMatias'} target='_blank'>
                  <FaTwitter />
                </Link>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className={style.contactEmailBox}>
          <h1>Ola</h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
