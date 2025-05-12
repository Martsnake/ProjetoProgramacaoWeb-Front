import React from "react";
import styles from './PasswordRecoverryPage.module.css';

export default function PasswordRecoveryPage() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.title}>Esqueci-me da palavra passe</h2>

                <div className={styles.group}>
                    <label htmlFor="emailOrStudentNumber" className={styles.subtitle}>
                        Email / Número de Aluno
                    </label>
                    <div className={styles.input}>
                        <input
                            id="emailOrStudentNumber"
                            type="text"
                            placeholder="Inserir email ou número de aluno"
                            className={styles.input_field}
                        />
                    </div>
                </div>

                <div className={styles.button_container}>
                    <button className={styles.recuperar_button}>Recuperar</button>
                </div>

                <a href="/login" className={styles.login_back}>Login</a>
            </div>
        </div>
    );
}