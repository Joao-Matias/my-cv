import getEducationOptions from "../../services/get-education-options/get-education-options.component";
import style from "./education.module.css";

import { Link } from "react-router-dom";

const Education = () => {
  const education = getEducationOptions();

  return (
    <section className={style.educationContainer}>
      <div className={style.educationContainerHeader}>
        <h2 className={style.educationContainerNumeral}>03</h2>
        <h2 className={style.educationContainerTitle}> Education</h2>
      </div>
      <div className={style.educationTextBox}>
        <ul className={style.educationCourseCont}>
          {education.map((course, i) => {
            return (
              <li key={i} className={style.educationCourseBox}>
                <Link
                  target="_blank"
                  to={course.link}
                  className={style.educationCourseLink}
                >
                  <h3 className={style.educationCourse}>
                    {course.studiedTitle}
                  </h3>
                </Link>
                <h5 className={style.educationInstitution}>
                  {course.institution}
                </h5>
                <div className={style.educationDatesBox}>
                  <span className={style.educationDates}>{course.from}</span>
                  <span className={style.educationDates}>-</span>
                  <span className={style.educationDates}>{course.to}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;
