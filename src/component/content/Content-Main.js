import React from "react";
import Menu from "../menu/Menu";
import './Content-Main.css'

const ContentMain = () => {
    return (
        <>
            <div className="entry">
                <div className="menu">
                <Menu menuSections = {["Home"]}/>
                </div>
            </div>
        </>
    )
}

export default ContentMain