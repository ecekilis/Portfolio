import React from 'react'
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/Foto.jpg"

const Hero = () => {
    return (
        <section className={styles.container} id="hero">
            <div className={styles.content} >
                <h1 className={styles.title}>Hallo, ich bin Ece</h1>
                <p className={styles.description}> Ich bin eine leidenschaftliche Frontend-Entwicklerin. Mit meinen Fähigkeiten in HTML5, CSS3, JavaScript, TypeScript und React gestalte ich ansprechende und funktionale Benutzeroberflächen.</p>
                <a href="mailto:ecekilis@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img className={styles.heroImg} src={heroImage} alt="HeroImage" />
        </section>
    )
}

export default Hero
