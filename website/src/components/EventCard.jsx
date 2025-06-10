

import styles from "./EventCard.module.css";


export default function EventCard({
  
  Name,
  Date,
  Description,
  Tags = [],
  Image,
  Organizer
  
}) {

  const formattedDate = new Date(Date).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className={styles.card}>

      <div className={styles.imageContainer}>
        <img
            src={Image || "/images/assets/iscteImag.svg"} 
            alt={Name}
            className={styles.image}
          />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.nome}>{Name}</h2>
          <span className={styles.data}>{formattedDate}</span>
        </div>

        <p className={styles.descricao}>{Description}</p>

        <div className={styles.footer}>
          <div className={styles.tags}>
            {Tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className={styles.organizerName}>Organizado por: {Organizer}</p>
        </div>

      </div>
    </div>
  );
}
