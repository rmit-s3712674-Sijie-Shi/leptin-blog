import React from "react";
import Menu from "../menu/Menu";
import styles from "./header.module.css"
import logo from "../../logo192.png"

const Header = (props) => {
    return (
        <>
            <div className={styles.headerBgContainer}>
                <img src={logo} alt="" className={styles.headerBg} />
            </div>
            <div className={styles.menuContainer}>
                <Menu menuSections={props.menuSections} />
            </div>
        </>
    )
}

export default Header