import React from 'react'
import styles from "./About.module.css";
import aboutImg from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";
import Info from './Info';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <h1 className={styles.aboutTitle}>ZERTIFIKATE</h1>
            <div className={styles.container}>

                <div className={styles.content}>
                    <Info title="Frontend Developer" desc="I am Frontend Developer.My skills are HTML, CSS, Javascript, React, Typescript" icon={cursorIcon} />
                    <Info title="Backend Developer" desc="I am Backend Developer.My skills are Mango.db, Node.js, Next.js" icon={serverIcon} />
                    <Info title="React Native Developer" desc="I am React Native Developer.My skills are HTML, CSS, Javascript, React, Typescript" icon={uiIcon} />




                </div>
            </div>
        </section>
    )
}

export default About
