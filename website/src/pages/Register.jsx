import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Register.module.css';

const Register = () => {
    
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
        
    const handleRegister = async (e) => {
      
        e.preventDefault();
        setError(null);
        setMessage(null);
          
        try {
            const response = await fetch('http://localhost:8000/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Email, Password })
            });
      
        const data = await response.json();
      
        if (response.ok) {
            setMessage(data.message);
            navigate('/login');
            }
      
          } catch (err) {
              console.error('Erro:', err);
              setError(err.message);
            }   
        
    }
    return(
            <div className={styles.main}>
                <div className={styles.container}>
                    <form onSubmit={handleRegister}>
                    <div>
                        <h1 className={styles.title}>Register</h1>
                        {message && <div >{message}</div>}
                        {error && <div >{error}</div>}
                    </div>
                    <div className={styles.group}>
                        <p className={styles.subtitle}>Email / Número de Aluno</p>
                        <div className={styles.input}>
                            <input type="text" 
                                   placeholder='Inserir email ou numero de aluno' 
                                   className={styles.input_field}
                                   value={Email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required/>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <p  className={styles.subtitle}>Password</p>
                        
                        <div className={styles.input}>
                            <input type="password" placeholder='Inserir password' 
                                   className={styles.input_field}
                                   value={Password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   required/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.button_container}> 
                            <button type="submit"className={styles.register_button}>Register</button>
                        </div>
                    </div>
                    </form>
                    
                    <div className={styles.centerText}>
                        Já tens conta? <Link to="/login" className={styles.forgot_password}>Fazer login</Link>
                    </div>
                    
                </div>
            </div>
    );
};
export default Register;
