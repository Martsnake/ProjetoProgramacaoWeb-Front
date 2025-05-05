import react from "react";
import { Link } from 'react-router-dom';

import styles from './LandingButtons.module.css';

export default function LandingButtons({title, subtitle, to}) {
    return(
        <Link to={to} className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.arrow}>&#x2794;</div>
        </Link>
    );
}