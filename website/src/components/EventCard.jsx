

import styles from "./EventCard.module.css";


export default function EventCard({
  
  nome,
  data,
  descricao,
  tags = [],
  imagem,
  organizador
  
}) {

  const formattedDate = new Date(data).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className={styles.card}>

      <div className={styles.imageContainer}>
        <img src={imagem} alt={nome} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.nome}>{nome}</h2>
          <span className={styles.data}>{formattedDate}</span>
        </div>

        <p className={styles.descricao}>{descricao}</p>

        <div className={styles.footer}>
          <div className={styles.tags}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className={styles.organizerName}>Organizado por: {organizador}</p>
        </div>

      </div>

    </div>
  );
}
