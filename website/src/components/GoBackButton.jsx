import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GoBackButton.module.css";

export default function GoBackButton({ label = "Voltar", className }) {
  const navigate = useNavigate();

  return (
    <button className={`${styles.goBackButton} ${className || ""}`} onClick={() => navigate(-1)}>
      <span className={styles.icon}>&laquo;</span> {label}
    </button>
  );
}