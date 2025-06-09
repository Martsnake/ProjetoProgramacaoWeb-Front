import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";

import EventCard from "../components/EventCard.jsx";

import styles from "./EventPage.module.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6); 
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  

  const handleEvent = async () => {

    setLoading(true);
    setError(null);
    try{
      const response = await fetch(`http://localhost:8000/events?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar eventos");
      }
      const data = await response.json();
      setEvents(data.events);
      setTotalPages(data.totalPages);
    }catch (err){
      console.error("Erro:", err);
      setError(err.message);
    }finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    handleEvent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);


  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };
  
  const sorted = [...events].sort((a, b) => new Date(a.data) - new Date(b.data));

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
              key={ev.id}
              to={`/event/${ev.id}`}
              state={{ ...ev }}
              className={styles.cardLink}
            >
              <EventCard {...ev} />
            </Link>
        ))}


        <div className={styles.pagination}>
          <button className={styles.pageButton}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1 || loading}>
            &laquo; Prev
          </button>
          <span className={styles.pageInfo}>Page {page} of {totalPages}</span>
          <button className={styles.pageButton}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === 1 || loading}>
            Next &raquo;
          </button>
        </div>
      </div>)}
    </div>
  );
}

export default EventPage;
