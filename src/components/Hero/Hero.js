import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_img_container}>
      <div className={styles.hero_img}></div>
    </section>
  );
};

export default Hero;
