import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './styling/nav.css';
import {logo} from '../images/images.jsx'

function Nav() {
    return(
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <dvi className="ghost"></dvi>
            <div className="navLinks">
                <div className="link"><Link to={"/home"} className="linc">Home</Link></div>
                <div className="link"><Link to={"/community"} className="linc">Community</Link></div>
                <div className="link"><Link to={"/crops"} className="linc">Crops</Link></div>
                <div className="link"><Link to={"/weather"} className="linc">Weather</Link></div>
            </div>
                <button className="signIn"> Sign In</button>

           
        </div>
    );
}

export default Nav;