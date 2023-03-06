import React from "react";
import styles from "./card.module.css"

const Card = () => {
    return (
        <>
        <div className={styles.card}>
            <div> title</div>
            <div> content</div>
        </div>
        </>
    )
}

export default Card;