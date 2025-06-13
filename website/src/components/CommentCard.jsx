import React, { useState } from "react";
import styles from "./CommentCard.module.css";
import user from '../assets/User.svg'

export default function CommentCard({
  SubmittedOn,
  Comment,
  Rating,

}) {
  const [showReport, setShowReport] = useState(false);



  return (
    <div className={styles.commentCard}>
      <div className={styles.header}>
        <img src={user} alt={`anonimo avatar`} className={styles.avatar} />
        <div className={styles.headerMain}>
          <div>
            <strong className={styles.username}>Anónimo</strong>
            <span className={styles.date}>{SubmittedOn}</span>
          </div>
          <div className={styles.stars}>
            <span className={styles.ratingValue}>{Rating}</span>
            <span className={styles.star}>&#x2605;</span>
            <div className={styles.reportWrapper}>
              <button
                className={styles.reportButton}
                onClick={() => setShowReport((v) => !v)}
                aria-label="Mais opções"
              >
                &#8942;
              </button>
              {showReport && (
                <div className={styles.reportMenu}>
                  <button className={styles.reportMenuItem}>
                    Reportar comentário
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.commentText}>{Comment}</div>
    </div>
  );
}