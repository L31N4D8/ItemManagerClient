import React from "react"
import styles from "./Header.css"

const Header = () => (
    <div className={styles.header}>
        <h1 className={styles.title}>Marvelous!</h1>
        <p className={styles.subtitle}>
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since.
        </p>
    </div>
)

export default Header