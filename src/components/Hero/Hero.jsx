import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sameer</h1>
        <p className={styles.description}>
          A budding Software Developer, having a keen interest in solving problems, learning new concepts and techniques of DSA and developing Websites
        </p>
        <a href="https://drive.google.com/file/d/1YQP-n1mAANHo1giTkGK2vHU9YEFApvLO/view?usp=sharing" className={styles.contactBtn} target="_blank">
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
