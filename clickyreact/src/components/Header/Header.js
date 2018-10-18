import React from "react";
// import { Link } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";
import "./Header.css";

const Header = props => (
    <div className="head">
        <Row>
            <Col size="md-12">
                <h1 id="header">Plant Picker</h1>
            </Col>
            <Col size="md-12">
                {/* <h3 id="count"> Click Count: {props.score}</h3> */}
                <h4 id="intro"> Click on an image to earn points, but don't click on any more than once!</h4>
            </Col>
        </Row>
        {/* <Link className="navbar-brand" to="/"> Plant Guesser </Link> */}
        {/* <div id="right">
        </div> */}
    </div>
);

export default Header;