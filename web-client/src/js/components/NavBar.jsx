import * as React from 'react';
import {Link} from "react-router-dom";

export const NavBar = () => {
    return <nav className="navBar">
        <Link to={"/"} className="navBar__link">Inicio</Link>
        <Link to={"/experiences"} className="navBar__link">Experiencias</Link>
        <Link to={"/about"} className="navBar__link">Quienes Somos</Link>
        <Link to={"/reserva"} className="navBar__link">Reserva</Link>
    </nav>
}