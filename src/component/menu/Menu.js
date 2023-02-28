import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

const Menu = (props) => {
    return (
        <>
        <div className="menu">
            {props.menuSections.map((res, index) => <Link className="menuButton" id={index} key={index} to={'/' + res}>
                {res}
            </Link>)}
        </div>
        </>
    )
}

export default Menu