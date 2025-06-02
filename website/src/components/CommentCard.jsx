import React, { useState } from "react";
import styles from "./CommentCard.module.css";
import user from '../assets/User.svg'

export default function CommentCard({
  username,
  date,
  commentText,
  replies = [],
}) {
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div className={styles.commentCard}>
      <div className={styles.header}>
        <img src={user} alt={`${username} avatar`} className={styles.avatar} />
        <div>
          <strong className={styles.username}>{username}</strong>
          <span className={styles.date}>{date}</span>
        </div>
      </div>

      <div className={styles.commentText}>{commentText}</div>

      <div className={styles.actions}>
        <button onClick={() => setShowReplyBox(!showReplyBox)}>Responder</button>
      </div>

      {showReplyBox && (
        <div className={styles.replyBox}>
          <textarea placeholder="Escreve a tua resposta..." />
          <button>Enviar</button>
        </div>
      )}

      <div className={styles.replies}>
        {replies.map((reply, i) => (
          <CommentCard key={i} {...reply} />
        ))}
      </div>
    </div>
  );
}