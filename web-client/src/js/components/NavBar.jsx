import * as React from 'react';
import {Link} from "react-router-dom";
import transparentLogo from "./assets/econotravel-transparent-logo.png";

export const NavBar = () => {
    return <nav className="navBar">
        <Link to={"/"} className="navBar__link"> <img className={"logo-img"} src={transparentLogo} /> </Link>
        <Link to={"/experiences"} className="navBar__link">EXPERIENCIAS</Link>
        <Link to={"/about"} className="navBar__link">QUIÉNES SOMOS</Link>
        <Link to={"/reserva"} className="navBar__link">RESERVA</Link>
    </nav>
}