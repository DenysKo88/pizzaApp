
import styles from './thanks.module.css';

export const Thanks = () => {
    return (
        <div className={styles.thanks}>
            <img src="sich.jpg" alt="sich" className={styles.thanks_img} />
            <div className={styles.title}>Дякуємо за замовлення!</div>
        </div>

    );
}