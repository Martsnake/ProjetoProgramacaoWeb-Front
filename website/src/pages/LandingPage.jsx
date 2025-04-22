import React, { useEffect } from "react";

import LandingButtons from "../components/Landingbuttons";

import styles from './LandingPage.module.css';

export default function LandingPage() {
    useEffect(() => {
        document.body.classList.add(styles.noScroll);

        return () => {
            document.body.classList.remove(styles.noScroll);
        }
    }, []);

    return(   

        <div className={styles.background}>
            <div className={styles.mainContainer}>
                {/*Hedear???*/}
                <div className={styles.messageContainer}>
                    <h1 className={styles.title}>Bem-vindo ao ISCTE</h1>
                    <p className={styles.subtitle}>Um espaço para crescer, inovar e conviver. <br />
                        Agora acessível sempre que quiseres.</p>
                </div>

                {/* Botões */}
                <div className={styles.buttonContainer}>
                    <LandingButtons
                    title="Sou um novo aluno"
                    subtitle="Como chegar ao ISCTE"
                    />

                    <LandingButtons
                    title="Já sou aluno"
                    subtitle="Quero fazer o login"
                    />
                </div>
            </div>
        </div>
        
    );
}



