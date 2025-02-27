import React from "react";

import styles from "./ProjectCard.module.css";

// Resimleri import ediyoruz
import ecommerceImg from "../../../assets/projects/ecommerce.PNG";
import burgerImg from "../../../assets/projects/burger.png";
import netflixImg from "../../../assets/projects/netflixx.PNG";
import spotifyImg from "../../../assets/projects/spotify.png";
import carImg from "../../../assets/projects/car.png";
import translateImg from "../../../assets/projects/translate.png";

// Proje resimlerini nesne olarak saklıyoruz:
const projectImages = {
    "projects/ecommerce.PNG": ecommerceImg,
    "projects/burger.png": burgerImg,
    "projects/netflixx.PNG": netflixImg,
    "projects/spotify.png": spotifyImg,
    "projects/car.png": carImg,
    "projects/translate.png": translateImg,
};

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
    return (
        <div className={styles.container}>

            <img
                src={projectImages[imageSrc] || ""}
                alt={title}
                className={styles.image}
            />

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>

            <div className={styles.links}>


                <a href={demo} target='_blank' className={styles.link}>
                    Demo
                </a>

                <a href={source} target='_blank' className={styles.link}> GitHub</a>
            </div>
        </div>
    );
};
