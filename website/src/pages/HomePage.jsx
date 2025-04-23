import react from "react";
import SeeAllButton from "../components/SeeAllButton";

import styles from './HomePage.module.css';

export default function MainPage() {
    return(
        <div className={styles.mainContainer}>
            <main className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.titleAndButton}>
                        <p>Horários</p>
                        <SeeAllButton to ="/"/>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2>Section 2</h2>
                    <p>This is the second section of the page.</p>
                </section>
                <section className={styles.section}>
                    <h2>Section 3</h2>
                    <p>This is the third section of the page.</p>
                </section>
            </main>

        </div>
    );
}