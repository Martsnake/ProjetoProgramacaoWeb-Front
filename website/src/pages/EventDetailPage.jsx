import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CommentCard from "../components/CommentCard.jsx";

import styles from "./EventDetailPage.module.css";


export default function EventDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const event = location.state;

  const tagRefs = useRef({});





  useEffect(() => {
    if (!event) {
      navigate("/home");
    }
  }, [event, navigate]);

  if (!event) return <p>Loading...</p>;

  const scrollToTag = (tag) => {
    const el = tagRefs.current[tag];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ backgroundImage: `url(${event.imagem})` }}>
        
        <div className={styles.headerOverlay}>
          <h2>{event.nome}</h2>
        </div>
      </header>

      <div className={styles.mainContent}>
       

        <div >
          <div> 
            <div>
              <h3>Data</h3>
              <p>{event.data}</p> 
            </div>
            <div>
              <h3>Tags</h3>
              {event.tags.map((tag, idx) => (
                <div key={idx} ref={el => (tagRefs.current[tag] = el)} >
                  
                </div>
              ))}
            </div>
            <div>
              <h3>Descrição</h3>
              <p>{event.descricao}</p>
            </div>
            <div>
              <h3 >Organizador</h3>
              <p>{event.organizador}</p>
            </div>
          </div>
          <hr />
          <div>
            <input type="text" />
            <CommentCard
              username="João"
              date="há 2 horas"
              commentText="Este evento parece incrível!"
              replies={[
                {
                  username: "Maria",
                  date: "há 1 hora",
                  commentText: "Concordo totalmente contigo!",
                },
              ]}
            />

          </div>
          
        </div>
      </div>
    </div>
  );
}