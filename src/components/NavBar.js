import React from 'react';
import avatar from '../img/perfil2.jpeg';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact>
                            Acerca De
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact>
                            Proyectos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021 Jcestrella
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default Navbar;
