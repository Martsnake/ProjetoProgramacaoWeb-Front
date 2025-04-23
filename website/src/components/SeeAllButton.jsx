import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SeeAllButton.module.css';

export default function SeeAllButton({ to }) {
    return(
        <Link to={to} className={styles.button}> 
            
                <p className={styles.text}>Ver tudo</p>
                <div className={styles.arrow}>&#x2794;</div>
            
        </Link>
    );
}