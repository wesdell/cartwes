import styles from "./course.module.css";
import Link from "../Link/Link";

const Course = ({ id, name, url }) => {
  return (
    <article className={styles.course}>
      <div className={styles.course_img}>
        <img src={require(`../../${url}`)} alt={name} />
      </div>
      <div className={styles.course_content}>
        <p className="pl-3">{name}</p>
        <div className={styles.course_btn}>
          <Link to={`/product/${id}`} text="View" />
        </div>
      </div>
    </article>
  );
};

export default Course;
