import React from "react";
import styles from "./EventCard.module.css";
import userImg from "../assets/User.svg"; 

export default function EventCard({
  nome,
  data,
  descricao,
  tags = [],
  imagem,
  onClick,
}) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img src={imagem} alt={nome} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.nome}>{nome}</h2>
          <span className={styles.data}>{data}</span>
        </div>
        <p className={styles.descricao}>{descricao}</p>
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <img
        src={userImg}
        alt="Organizador"
        className={styles.organizerImg}
      />
    </div>
  );
}
