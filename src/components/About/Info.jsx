import React from 'react'
import styles from "./About.module.css";

const Info = ({ title, desc, icon }) => {
    return (
        <div className={styles.all}>
            <div className={styles.iconImage}>
                <img src={icon} alt="" />

            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{desc}</p>
            </div>
        </div>
    )
}

export default Info
