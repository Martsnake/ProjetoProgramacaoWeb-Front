import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LandingButtons from "../components/Landingbuttons";

import styles from './LandingPage.module.css';

export default function LandingPage() {

    const navigate = useNavigate();

    
    useEffect(() => {
        document.body.classList.add(styles.noScroll);

        return () => {
            document.body.classList.remove(styles.noScroll);
        }
    }, []);

     useEffect(() => {
            const token = localStorage.getItem("token");
            
            
            if (token) {
                navigate('/home');
            }
        }, [navigate]);

    return(   

        <div className={styles.background}>
            <div className={styles.mainContainer}>
            
                <div className={styles.messageContainer}>
                    <h1 className={styles.title}>Bem-vindo ao ISCTE</h1>
                    <p className={styles.subtitle}>Um espaço para crescer, inovar e conviver. <br />
                        Agora acessível sempre que quiseres.</p>
                </div>

                
                <div className={styles.buttonContainer}>
                    <LandingButtons
                    title="Sou um novo aluno"
                    subtitle="Como chegar ao ISCTE"
                    to= "/register"
                    />

                    <LandingButtons
                    title="Já sou aluno"
                    subtitle="Quero fazer o login"
                    to= "/login"
                    />
                </div>
            </div>
        </div>
        
    );
}



