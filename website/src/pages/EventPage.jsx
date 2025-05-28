import React from "react";

import styles from "./EventPage.module.css"

export default function EventPage() {
  return(
    <div className={styles.page}>
      <h1 className={styles.title}>Events</h1>
      <div className={styles.eventgrid}>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </div>
  );
}