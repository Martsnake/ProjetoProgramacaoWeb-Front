import react from "react";
import SeeAllButton from "../components/SeeAllButton";
import ScheduleTime from "../components/ScheduleCard";
import NotificationCard from "../components/NotificationCard";
import MenuCard from "../components/MenuCard";

import styles from './HomePage.module.css';


export default function MainPage() {
    return(
        <div className={styles.mainContainer}>
            <main className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.titleAndButton}>
                        <h2>HORÁRIOS</h2>
                        <SeeAllButton to ="/"/>
                    </div>
                    <ScheduleTime
                        time="14:00"
                        date="30 abr."
                        label="AULA"
                        subject="Programação para Ciência"
                        location="M1.04, Piso 1, Edifício 1, ISCTE-SI"/>
                </section>
                <section className={styles.section}>
                    <div className={styles.titleAndButton}>
                        <h2>NOTIFICAÇÕES</h2>
                        <SeeAllButton to ="/event"/>
                    </div>
                    <NotificationCard
                        title="Bibloteca"
                        subtitle="Mudança de horário temporária"/>

                </section>
                <section className={styles.section}>
                    <div className={styles.titleAndButton}>
                        <h2>NOTIFICAÇÕES</h2>
                        <SeeAllButton to ="/"/>
                    </div>
                    <MenuCard
                        title="Cantina AE"
                        mealType="Almoço"
                        items={[
                            { label: "Sopa", value: "Creme de cenoura" },
                            { label: "Carne", value: "Almôndegas com esparguete" },
                            { label: "Peixe", value: "Rissóis de camarão com arroz de tomate" },
                            { label: "Veget.", value: "Hamburguer de quinoa com arroz de legumes" },
                        ]}
                    />
                </section>
            </main>

        </div>
    );
}