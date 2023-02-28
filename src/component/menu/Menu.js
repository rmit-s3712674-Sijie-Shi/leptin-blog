import React from "react";
import './Menu.css'

const Menu = (props) => {
    return (
        <>
        <div className="menu">
            {props.menuSections.map((res, index) => <button className="menuButton" id={index} key={index}>
                {res}
            </button>)}
        </div>
        </>
    )
}

export default Menu