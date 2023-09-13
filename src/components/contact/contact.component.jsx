import style from './contact.module.css';

import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';

import { AiFillGithub, AiFillLinkedin, AiOutlinePhone } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';

import userImg from '../../img/JMatias-pic2.jpeg';

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
                  <FaXTwitter />
                </Link>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className={style.contactDetailsBox}>
          <div className={style.contactImgBox}>
            <img
              src={userImg}
              alt='This cv creator'
              className={style.contactImg}
            />
          </div>
          <div className={style.contactDetailsCont}>
            <div className={style.contactPhoneCont}>
              <IconContext.Provider value={{ color: '#14213d', size: '3rem' }}>
                <AiOutlinePhone className={style.contactContacts} />
              </IconContext.Provider>
              <p className={style.contactNumber}>07853412421</p>
            </div>
            <div className={style.contactPhoneCont}>
              <IconContext.Provider value={{ color: '#14213d', size: '3rem' }}>
                <TfiEmail className={style.contactContacts} />
                <p className={style.contactNumber}>jdmatias@live.com</p>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
