import React from "react";
import "./ImageCard.css";
import Container from "../Container"
import Row from "../Row";
// import Col from "../Col";

const ImageCard = props => (
    <Container>
        <Row>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
        </Row>
        <Row>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
        </Row>
        <Row>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url(${props.image})` : "none"
                }}
            >
                {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
        </Row>
    </Container>
);

export default ImageCard;