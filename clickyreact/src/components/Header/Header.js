import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"> Plant Guesser </Link>
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                >
                    Home
            </Link>
            </li>
        </ul>
    </div>
    </nav>
);

export default Header;