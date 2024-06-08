import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sameer</h1>
        <div className={styles.description}>
          <Typewriter
            words={['A dedicated Web Developer passionate about building engaging websites. While proficient in web technologies, I am  intend to improve my skills in Data Structures and Algorithms to enhance my problem-solving abilities.']}
            loop={1} // Change this to `0` or `true` for infinite loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        {/* <a href="https://drive.google.com/file/d/1YQP-n1mAANHo1giTkGK2vHU9YEFApvLO/view?usp=sharing" className={styles.contactBtn} target="_blank">
          Resume
        </a> */}
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
