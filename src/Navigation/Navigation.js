import React from "react";
import "./Navigation.css";

const nav = props => {
    return (
        <div className='navDiv'>
            <nav>
                <ul className="navList">
                    <li onClick={() => props.click("home")}>Home</li>
                    <li onClick={() => props.click("about")}>About Us</li>
                    <li onClick={() => props.click("contact")}>Contact Us</li>
                </ul>
            </nav>
        </div>
    );
};
export default nav;
