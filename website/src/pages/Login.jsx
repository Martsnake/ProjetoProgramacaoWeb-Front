import React, { useState } from 'react';
import styles from './Login.module.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    return(
            <div className={styles.login-main}>
                <div className={styles.login-container}>
                    <h1 className={styles.login-title}>Login</h1>
                    <div ></div>
                </div>
                <div>
                    <div className={styles.input-group}>
                        <img src="" alt="" />
                        <input type="text" placeholder='Inserir email ou numero de aluno' className={styles.input-field}/>
                    </div>
                </div>
                <div >
                    <div className={styles.input-group}>
                        <img src="" alt="" />
                        <input type="password" placeholder='Inserir password' className={styles.input-field}/>
                    </div>
                </div>
                <div>
                    <div className={styles.button-container}>
                        <button className={styles.login-button}>Login</button>
                    </div>
                </div>
            </div>
    );
}
