import React from "react";
import Menu from "../menu/Menu";
import styles from './Content-Main.module.css'

const ContentMain = () => {
    return (
        <>
            <div className={styles.entry}>
                <div className={styles.entrymenu}>
                <Menu menuSections = {["Home"]}/>
                </div>
            </div>
        </>
    )
}

export default ContentMain