import react from "react";

import styles from "./ScheduleCard.module.css";

export default function ScheduleTime({ time, date, label, subject, location }) {
    return (
        <div className={styles.card}>
            <div className={styles.timeContainer}>
                <div className={styles.time}>{time}</div>
                <p className={styles.date}>{date}</p>
            </div>

            <div className={styles.details}>
                <span className={styles.label}>{label}</span>
                <p className={styles.subject}>{subject}</p>
                <p className={styles.room}>{location}</p>
            </div>

            <div className={styles.arrow}>&#x2794;</div>
        </div>
    );
}