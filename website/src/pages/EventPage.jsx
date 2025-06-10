import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImgIscte from "../assets/iscteImag.svg";


import styles from "./EventPage.module.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5); 
  const [totalPages, setTotalPages] = useState("");
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  

  const handleEvent = async (page) => {

    setLoading(true);
    setError(null);
    try{
      console.log(localStorage.getItem("token"));
      
      const response = await fetch(`http://localhost:8000/events?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          "Authorization" : localStorage.getItem("token"),
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error("Erro ao buscar eventos");
      }
      const data = await response.json();
      console.log(data);  
      
      setEvents(data);
      console.log(setTotalPages(data.totalPages));
      
      setTotalPages(data.totalPages);
    }catch (err){
      console.error("Erro:", err);
      setError(err.message);
    }finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      await handleEvent();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    fetchData();
  }, [page]);


  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };
  
  const sorted = [...events].sort((a, b) => new Date(a.Date) - new Date(b.Date));
  
  const formattedDate = new Date(sorted.Date).toLocaleDateString();
  
  

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Eventos</h1>
      {error  && <div className = {styles.textCenter} >{error}</div>}

      {loading ? (
          <div className={styles.textCenter}>
            <div className={styles.spinnerBorder} role="status" />
            <p className={styles.mt2}>Loading events...</p>
          </div>
        ) : (
      <div className={styles.eventgrid}>
        {sorted.map(ev => (
            <Link
              key={ev.Name}
              to={`/event/${ev.Name}`}
              state={{ ...ev }}
              className={styles.cardLink}
            >
              <div className={styles.card}>
              
                    <div className={styles.imageContainer}>
                      <img
                          src={ev.Image || ImgIscte} 
                          className={styles.image}
                        />
                    </div>
              
                    <div className={styles.content}>
                      <div className={styles.header}>
                        <h2 className={styles.nome}>{ev.Name}</h2>
                        <span className={styles.data}>{formattedDate}</span>
                      </div>
              
                      <p className={styles.descricao}>{ev.Description}</p>
              
                      <div className={styles.footer}>
                        <div className={styles.tags}>
                          {ev.Tags.map((tag, idx) => (
                            <span key={idx} className={styles.tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className={styles.organizerName}>Organizado por: {ev.Organizer}</p>
                      </div>
              
                    </div>
                  </div>
            </Link>
        ))}


       
      </div>)}
       <div className={styles.pagination}>
          <button className={styles.pageButton}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1 || loading}>
            &laquo; Prev
          </button>
          <span className={styles.pageInfo}>Page {page} of {totalPages}</span>
          <button className={styles.pageButton}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages || loading}>
            Next &raquo;
          </button>
        </div>
    </div>
  );
}

export default EventPage;
