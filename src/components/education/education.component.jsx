import getEducationOptions from '../../services/get-education-options/get-education-options.component';
import style from './education.module.css';

const Education = () => {
  const education = getEducationOptions();

  return (
    <section className={style.educationContainer}>
      <div className={style.educationContainerHeader}>
        <h1 className={style.educationContainerNumeral}>03</h1>
        <h1 className={style.educationContainerTitle}> Education</h1>
      </div>
      <div className={style.educationTextBox}>
        <ul className={style.educationCourseCont}>
          {education.map((course, i) => {
            return (
              <li key={i} className={style.educationCourseBox}>
                <h3 className={style.educationCourse}>{course.studiedTitle}</h3>
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
