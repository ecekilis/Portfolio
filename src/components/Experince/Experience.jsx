import React from 'react'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json";



import htmlImg from "../../../assets/skills/html.png";
import cssImg from "../../../assets/skills/css.png";
import reactImg from "../../../assets/skills/react.png";
import figmaImg from "../../../assets/skills/figma.png";
import jsImg from "../../../assets/skills/javas.png";
import tsImg from "../../../assets/skills/ts.png";

// Resimleri bir nesne olarak saklıyoruz:
const images = {
    "html.png": htmlImg,
    "css.png": cssImg,
    "react.png": reactImg,
    "javas.png": jsImg,
    "ts.png": tsImg,
    "figma.png": figmaImg,

};
import { getImageUrl } from '../../utils';


const Experience = () => {


    return (
        <section id="experience" className=
            {styles.container}>
            <h2 className={styles.title}>SKILLS</h2>            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={images[skill.imageSrc]} alt={skill.title} />

                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}</div>


            </div>
        </section>
    )
}

export default Experience
