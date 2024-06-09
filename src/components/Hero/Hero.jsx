import React, { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 830px)');
    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Set initial state
    setIsSmallScreen(mediaQuery.matches);

    // Listen for media query changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sameer</h1>
        <div className={styles.description}>
          {isSmallScreen ? (
            <span>
              A dedicated Web Developer passionate about building engaging websites, with a keen interest in Python programming. While proficient in web technologies, I am intent on improving my skills in Data Structures and Algorithms to enhance my problem-solving abilities.
            </span>
          ) : (
            <Typewriter
              words={['A dedicated Web Developer passionate about building engaging websites, with a keen interest in Python programming. While proficient in web technologies, I am intent on improving my skills in Data Structures and Algorithms to enhance my problem-solving abilities.']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          )}
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
