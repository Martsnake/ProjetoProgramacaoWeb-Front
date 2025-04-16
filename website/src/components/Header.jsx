import React, { useState } from "react";

import styles from './Header.module.css';

import logo from '../assets/Bitmap.svg'

export default function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="Iscte" className={styles.logo}/>
        </header>
    );
}

