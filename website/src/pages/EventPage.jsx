import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import GoBackButton from "../components/GoBackButton";


import styles from "./EventPage.module.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 6; 
  const [totalPages, setTotalPages] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [error, setError] = useState(null);
  

  const handleEvent = async () => {
    
    setLoading(true);
    setError(null);
    try{
      
      
      const response = await fetch(`http://localhost:8000/events`, {
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
      setEvents(Array.isArray(data) ? data : []);
      setTotalPages(Math.ceil((Array.isArray(data) ? data.length : 0) / limit))
    
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
  }, []);

  const filtered = events.filter(ev =>
    ev.Name.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => new Date(a.Date) - new Date(b.Date));
  const totalPagesCalc = Math.max(1, Math.ceil(sorted.length / limit));
  const paginated = sorted.slice((page - 1) * limit, page * limit);

  useEffect(() => {
    setTotalPages(totalPagesCalc);
    if (page > totalPagesCalc) setPage(1);
    
  }, [sorted.length]);

  

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };
  

  return (
    <div className={styles.page}>
      <GoBackButton label="Voltar" />
      <h1 className={styles.title}>Eventos</h1>
      <SearchBar value={search} onChange={setSearch} placeholder="Search..."/>

      {error  && <div className = {styles.textCenter} >{error}</div>}

      {loading ? (
          <div className={styles.textCenter}>
            <div className={styles.spinnerBorder} role="status" />
            <p className={styles.mt2}>Loading events...</p>
          </div>
        ) : (
      <div className={styles.eventgrid}>
        {paginated.map(ev => (
            <Link
              key={ev.EventId}
              to={`/event/${ev.EventId}`}
              state={{ ...ev }}
              className={styles.cardLink}
            >
              <EventCard
                key={ev.EventId}
                {...ev}
              />
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
