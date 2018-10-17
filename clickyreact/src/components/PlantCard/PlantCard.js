import React from "react";
import "./PlantCard.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <img src={props.image}/>
        </div>
    </div>
);

export default Card;