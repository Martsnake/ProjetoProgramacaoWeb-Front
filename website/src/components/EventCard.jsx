import ImgIscte from "../assets/iscteImag.svg";

import styles from "./EventCard.module.css";


export default function EventCard({
  
  Name,
  Date: eventDate,
  Description,
  Tags = [],
  Image,
  Organizer
  
}) {
  let formattedDate = "";
  try {
    formattedDate = eventDate
      ? `${new window.Date(eventDate).toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })} - ${new window.Date(eventDate).toLocaleDateString("pt-PT", { day: "2-digit", month: "2-digit", year: "numeric" })}`
      : "";
  } catch {
    formattedDate = "";
  }

  return (
  <div className={styles.card}>
              
    <div className={styles.imageContainer}>
      <img
        src={Image || ImgIscte} 
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
