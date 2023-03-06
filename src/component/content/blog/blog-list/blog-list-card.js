import React from "react";
import styles from "./blog-list-card.module.css"
import Card from "./card/card";

const BlogListCard = () => {
    return (
        <>
        <div className={styles.cardList}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </>
    )
}

export default BlogListCard;