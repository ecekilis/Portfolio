import React from "react";
import styles from "./Contact.module.css";

import emailImg from "../../assets/contact/emailIcon.png";
import githubImg from "../../assets/contact/githubIcon.png";
import linkedImg from "../../assets/contact/linkedinIcon.png";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={emailImg} alt="Email icon" className={styles.image} />
                    <a href="mailto:ecekilis@gmail.com" target="_blank">ecekilis@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedImg} alt="LinkedIn icon" className={styles.image} />
                    <a href="https://www.linkedin.com/in/ece-ali-77050b127/" target="_blank">linkedin.com/eceali</a>
                </li>
                <li className={styles.link}>
                    <img src={githubImg} alt="GitHub icon" className={styles.image} />
                    <a href="https://github.com/ecekilis" target="_blank">github.com/ecekilis</a>
                </li>
            </ul>
        </footer>
    );
};
