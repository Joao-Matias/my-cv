import style from "./contact.module.css";

import { Link } from "react-router-dom";

import { IconContext } from "react-icons";

import { AiFillGithub, AiFillLinkedin, AiOutlinePhone } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

import userImg from "../../img/JMatias-pic2.jpeg";

const Contact = () => {
  return (
    <section className={style.contactContainer}>
      <div className={style.contactBox}>
        <div className={style.contactTextBox}>
          <div className={style.contactContainerHeader}>
            <h2 className={style.contactContainerNumeral}>04</h2>
            <h2 className={style.contactContainerTitle}> Contact</h2>
          </div>
          <p className={style.contactParagraph}>
            Drop me an email and let's discuss any questions you might have. You
            can also have a look at my X account where I post updates of
            activity in my coding journey.
          </p>
          <div className={style.contactLinks}>
            <div className={style.contactGitBox}>
              <IconContext.Provider value={{ color: "#e5e5e5", size: "4rem" }}>
                <Link to={"https://github.com/Joao-Matias"} target="_blank">
                  <AiFillGithub />
                </Link>
              </IconContext.Provider>
            </div>
            <div className={style.contactLinkedinBox}>
              <IconContext.Provider value={{ color: "#e5e5e5", size: "4rem" }}>
                <Link
                  to={"https://www.linkedin.com/in/jo%C3%A3o-matias-93b638129/"}
                  target="_blank"
                >
                  <AiFillLinkedin />
                </Link>
              </IconContext.Provider>
            </div>
            <div className={style.contactLinkedinBox}>
              <IconContext.Provider value={{ color: "#e5e5e5", size: "4rem" }}>
                <Link to={"https://twitter.com/JoaoDMatias"} target="_blank">
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
              alt="This cv creator"
              className={style.contactImg}
            />
          </div>
          <div className={style.contactDetailsCont}>
            <div className={style.contactPhoneCont}>
              <IconContext.Provider value={{ color: "#14213d", size: "3rem" }}>
                <AiOutlinePhone className={style.contactContacts} />
              </IconContext.Provider>
              <Link className={style.contactNumberLink} to="tel:07853412421">
                <p className={style.contactNumber}>07853412421</p>
              </Link>
            </div>
            <div className={style.contactPhoneCont}>
              <IconContext.Provider value={{ color: "#14213d", size: "3rem" }}>
                <TfiEmail className={style.contactContacts} />
                <Link
                  onClick={(e) => {
                    window.location = "mailto:jdmatias@live.com";
                    e.preventDefault();
                  }}
                  className={style.contactNumberLink}
                >
                  <p className={style.contactNumber}>jdmatias@live.com</p>
                </Link>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
