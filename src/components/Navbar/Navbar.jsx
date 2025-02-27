import React, { useState } from 'react'
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={styles.menuBtn} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>

                <ul className={styles.menuItems}>

                    <li> <a href="#hero"> Profile</a></li>
                    <li> <a href="#experience"> Skills</a></li>
                    <li> <a href="#projects"> Projekte</a></li>
                    <li> <a href="#contact"> Kontakt</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
