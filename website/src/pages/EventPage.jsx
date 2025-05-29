import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockEvents } from "../mockEvents";
import EventCard from "../components/EventCard.jsx";
import styles from "./EventPage.module.css";

export default function EventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {setEvents(mockEvents);}, []);
  const sorted = [...events].sort((a, b) => new Date(a.data) - new Date(b.data));

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Eventos</h1>
      <div className={styles.eventgrid}>
        {sorted.map(ev => (
          <Link
            key={ev.id}
            to={`/event/${ev.id}`}
            className={styles.cardLink}
          >
            <EventCard
              nome={ev.nome}
              data={new Date(ev.data).toLocaleDateString("pt-PT", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
              descricao={ev.descricao}
              organizador={ev.organizador}
              tags={ev.tags}
              imagem={ev.imagem}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
