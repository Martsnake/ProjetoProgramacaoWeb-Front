import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import SeeAllButton from "../components/SeeAllButton";
import ScheduleTime from "../components/ScheduleCard";
import NotificationCard from "../components/NotificationCard";
import MenuCard from "../components/MenuCard";
import EventCard from "../components/EventCard";

import styles from './HomePage.module.css';


export default function MainPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/events", {
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => setEvents(Array.isArray(data) ? data : []))
        .catch(() => setEvents([]));
    }, []);

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
                        <h2>EVENTOS</h2>
                        <SeeAllButton to ="/event"/>
                    </div>
                    <div className={styles.eventGrid}>
                        {[...events]
                        .sort((a, b) => new Date(a.Date) - new Date(b.Date))
                        .slice(0, 3)
                        .map(ev => (
                            <Link
                                key={ev.EventId}
                                to={`/event/${ev.EventId}`}
                                state={{ ...ev }}
                                className={styles.cardLink}
                            >
                                <EventCard
                                key={ev.EventId}
                                {...ev}
                                />
                            </Link>
                        ))}
                    </div>
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