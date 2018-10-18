import React from "react";
import "./Nav.css";
// import Row from "../Row";
// import Col from "../Col";

const Nav = props => (
    <nav className="nav justify-content-end" id="nav">
        <ul className="nav">
            <li className="nav-item">
                <h4 id="left">Plant Picker</h4>
            </li>
            <li className="nav-item">
                <h4 id="right">Score: {props.score}</h4>
            </li>
            <li class="nav-item">
                <h4 id="right2">Top Score: {props.totalScore}</h4>
            </li>
        </ul>
        {/* <Row>
            <Col size="md-">
                <h4 id="left">Plant Picker</h4>
            </Col>
            <Col size="md-">
                <h4 id="right">Score: {props.score}</h4>
            </Col>
            <Col size="md-">
                <h4 id="right2">Top Score: {props.totalScore}</h4>
            </Col>
        </Row> */}

    </nav>
);

export default Nav;