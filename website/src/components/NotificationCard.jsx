import React from "react";
import styles from './NotificationCard.module.css';

export default function NotificationCard({ title, subtitle}) {
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.arrow}>&#x2794;</div>
        </div>
    );
}