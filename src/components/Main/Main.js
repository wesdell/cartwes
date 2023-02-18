import styles from "./main.module.css";

const Main = ({ children }) => {
  return (
    <div className={styles.principal}>
      <main className={styles.main_content}>{children}</main>
    </div>
  );
};

export default Main;
