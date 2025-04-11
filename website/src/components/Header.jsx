import React, { useState } from "react";

import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <h1>My Website</h1>
        </header>
    );
}

