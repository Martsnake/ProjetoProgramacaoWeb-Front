import styles from "./BackToTopButton.module.css";

export default function BackToTopButton() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button className={styles.goToTopButton} onClick={handleClick}>
            &uarr;
        </button>
    );
}