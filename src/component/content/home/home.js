import React from "react";
import Header from "../../header/header";
import styles from "./home.module.css"
import Card from "../cards/cards";

const Home = () => {
    return (
        <>
            <Header menuSections={["Home", "Blog", "Galary", "Contact"]} />
            <div className={styles.homePage}>
                <Card />
            </div>
        </>
    )
}

export default Home;