import React, { useState } from "react";

import styles from './Header.module.css';

import logo from '../assets/Bitmap.svg'
import user from '../assets/User.svg'

export default function Header() {
    const token = localStorage.getItem('token');
    
    return(
        <header className={styles.header}>
            <img src={logo} alt="Iscte" className={styles.logo} oncontextmenu="return false;"/>
            
            {token && (
                <div className={styles.logo}>
                    <img src={user} alt="User" className={styles.userIcon}/>
                </div>
        )}
        </header>
    );
}

