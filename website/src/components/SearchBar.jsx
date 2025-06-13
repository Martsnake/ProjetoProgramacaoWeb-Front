import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange, placeholder = "Pesquisar eventos..." }) {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
}