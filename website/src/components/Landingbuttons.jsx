import react from "react";

import styles from './LandingButtons.module.css';

export default function LandingButtons({title, subtitle}) {
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.arrow}>&#x2794;</div>
        </div>
    );
}