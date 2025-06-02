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
              state={{ ...ev }}
              className={styles.cardLink}
            >
              <EventCard {...ev} />
            </Link>
          ))}
      </div>
    </div>
  );
}
