import React, { useState } from 'react';
import styles from './Login.module.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    return(
            <div className={styles.main}>
                <div className={styles.container}>
                    <div>
                        <h1 className={styles.title}>Login</h1>
                    </div>
                    <div className={styles.group}>
                        <p className={styles.subtitle}>Email / Número de Aluno</p>
                        <div className={styles.input}>
                            <input type="text" placeholder='Inserir email ou numero de aluno' className={styles.input_field}/>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <p  className={styles.subtitle}>Password</p>
                        <div className={styles.input}>
                            <input type="password" placeholder='Inserir password' className={styles.input_field}/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.button_container}>
                            <button className={styles.login_button}>Login</button>
                        </div>
                    </div>
                    <div>
                        <p className={styles.forgot_password}>Esqueci-me da password</p>
                    </div>
                </div>
            </div>
    );
}
