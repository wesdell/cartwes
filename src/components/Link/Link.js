import styles from "./link.module.css";
import { NavLink } from "react-router-dom";
const Link = ({ Icon, text, to }) => {
  return (
    <NavLink end to={to}>
      <div className={styles.link}>
        {Icon && <Icon className={styles.icon} />}
        {text && <span className={styles.link_text}>{text}</span>}
      </div>
    </NavLink>
  );
};
export default Link;
