import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"> Plant Guesser </Link>
        <div>
            <p>Click Count: {props.score}</p>
        </div>

    </nav>
);

export default Header;