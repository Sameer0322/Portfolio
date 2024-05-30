import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Data Structures and Algorithms</h3>
              <p>
                Proficient in solving problems demonstrating strong analytical and coding skills from brute force to optimized approach.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Python Programming</h3>
              <p>
                Proficient in automation using Python to streamline processes and improve efficiency, scripting and creating automated workflows, reducing manual tasks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Proficient in frontend development, I have been building responsive and optimized web pages utilizing modern frameworks and technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Proficient in developing fast and optimized back-end systems and APIs, ensuring seamless integration and robust performance for web applications.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
