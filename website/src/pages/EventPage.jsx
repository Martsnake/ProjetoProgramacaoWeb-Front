import React from "react";
import EventCard from "../components/EventCard.jsx";

import styles from "./EventPage.module.css"

export default function EventPage({ event }) {
  return(
    <div className={styles.page}>
      <h1 className={styles.title}>Events</h1>
      <div className={styles.eventgrid}>
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
          />
        ))}
      </div>
    </div>
  );
}