import React from "react";
import styles from "./MenuCard.module.css";

export default function MenuCard({ title, mealType, items }) {
    return (
        <div className={styles.card}>
            {/* Header Section */}
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.mealType}>
                    {mealType} <span className={styles.arrow}>&#x25BC;</span>
                </div>
            </div>

            {/* Menu Items Section */}
            <div className={styles.items}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.value}>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}