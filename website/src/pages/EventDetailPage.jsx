import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import CommentCard from "../components/CommentCard.jsx";
import StarRating from "../components/StarRating.jsx";
import GoBackButton from "../components/GoBackButton.jsx";
import BackToTopButton from "../components/BackToTopButton.jsx";


import styles from "./EventDetailPage.module.css";
import isctImg from  "../assets/iscteImag.svg"

export default function EventDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const event = location.state;

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  const tagRefs = useRef({});

  const eventDate = event.Date ? new Date(event.Date) : null;
  let formattedDate = "";
  try {
    formattedDate = eventDate
      ? `${eventDate.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })} - ${eventDate.toLocaleDateString("pt-PT", { day: "2-digit", month: "2-digit", year: "numeric" })}`
      : "";
  } catch {
    formattedDate = "";
  }
  
  const fetchComments = async () => {
    setLoadingComments(true);
    try {
      const res = await fetch(`http://localhost:8000/events/${event.EventId}/reviews`, {
          headers: {
              "Authorization": localStorage.getItem("token"),
              "Content-Type": "application/json"
            }
    });
      if (!res.ok) throw new Error("Erro ao buscar comentários");
      const data = await res.json();
      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      setComments([]);
    } finally {
      setLoadingComments(false);
    }
  };

  
  useEffect(() => {

    if (event.EventId) fetchComments();
    if (!event) {
      navigate("/home");
    }
    
  }, [event, navigate]);

  const handleSubmitComment = () => {
    const payload = {
      Rating: rating,
      Comment: comment,
      SubmittedOn: new Date().toISOString(),
    };

    fetch(`http://localhost:8000/events/${event.EventId}/reviews`, {
      method: "PUT",
      headers: {
        "Authorization": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao submeter comentário");
        return res.json();
      })
      .then(() => {
        setComment("");
        setRating(0);
        fetchComments();
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
    

  };



  if (!event) return <p>Loading...</p>;


  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ backgroundImage: `url(${event.imagem || isctImg })` }}>
        <GoBackButton className={styles.goBackHeader} label=""/>
        <div className={styles.headerOverlay}>
          <h2>{event.Name}</h2>
        </div>
      </header>

      <div className={styles.mainContent}>
       

        <div> 
          <div> 
            <div className={styles.mainContentHeader}>
              <div className={styles.dataContainer}>
                <h3>Data</h3>
                <p>{formattedDate}</p> 
              </div>
            </div>
            <div>
              <h3>Rating</h3>
              <div className={styles.stars}>
                <span className={styles.ratingValue}>{event.AvgRating.toFixed(1)}</span>
                <span className={styles.star}>&#x2605;</span>
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <h3>Descrição</h3>
              <p className={styles.description}>{event.Description}</p>
            </div>
                
            <div>
              <h3>Tags</h3>
              <div className={styles.tagsContainer}>
                {event.Tags.map((tag, idx) => (
                  <div key={idx} ref={el => (tagRefs.current[tag] = el)} className={styles.tag}>
                    {tag}
                  </div>
                ))}

              </div>
            </div>
            <div className={styles.organizerContainer}>
              <h3 >Organizador</h3>
              <p>{event.Organizer}</p>
            </div>
          </div>
          <hr />
          <div>
            {/*Ver melhor isto */}
            <input
              type="text"
              className={styles.input}
              placeholder="O que achaste do evento?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <div className={styles.ratingContainer}>
              <div>
                <StarRating value={rating} onChange={setRating} />
              </div>
              <button className={styles.submitButton} 
                onClick={handleSubmitComment}
                disabled={rating === 0 || comment.trim() === ""}
              >
                Submeter comentário
              </button>
            </div>
              
              {loadingComments ? (
                <p>A carregar comentários...</p>
              ) : comments.length === 0 ? (
                
                <p>Sem comentários ainda.</p>
              ) : (
                
                comments.map((c, idx) => (
                  <CommentCard
                    key={idx}
                     SubmittedOn={new Date(c.SubmittedOn).toLocaleString("pt-PT")}
                    Comment={c.Comment}
                    Rating={c.Rating}
                  />
                ))
              )}
          </div>
          
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}