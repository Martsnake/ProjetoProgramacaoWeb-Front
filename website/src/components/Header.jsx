import React, { useState } from "react";

import styles from './Header.module.css';

import logo from '../assets/Bitmap.svg'

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return(
        <header className={`${styles.header} ${isLoggedIn ? styles.loggedIn : ""}`}>
            <img src={logo} alt="Iscte" className={styles.logo}/>
            {/* Uma forma BASICA de modar o header quando o utilizador faz login(não vai ficar assim) */}
            <div className={styles.logo}>Logo</div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </header>
    );
}

