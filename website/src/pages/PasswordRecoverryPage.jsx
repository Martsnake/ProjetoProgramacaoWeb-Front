import React from "react";

export default function PasswordRecoveryPage() {
    return(
        <div>
            {/* Title */}
            <h1>Esqueci-me da palavra passe</h1>

            {/* Input Section */}
            <label htmlFor="emailOrStudentNumber">
                Email / Número de Aluno
            </label>
            <input
                id="emailOrStudentNumber"
                type="text"
                placeholder="Inserir email ou número de aluno"
                className={styles.input}
            />

            {/* Recover Button */}
            <button>Recuperar</button>

            {/* Login Link */}
            <a href="/login" className={styles.loginLink}>
                Login
            </a>
        </div>
    )
}