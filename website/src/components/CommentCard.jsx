import React, { useState } from "react";
import styles from "./CommentCard.module.css";
import user from '../assets/User.svg'

export default function CommentCard({
  username,
  date,
  commentText,
  avaliacao,

}) {

  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");



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
    </div>
  );
}