import React, { Component } from "react";
import API from "../utils/API";
import ImageCard from "../components/ImageCard";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Home extends Component {
    state = {
        image: "",
        click: false,
        clickCount: 0
    };

    componentDidMount() {
        this.shuffleGroup();
    }

    //click handler function

    handleClick = event => {

        const btnType = event.target.attributes.getNamedItem("data-value").value;

        const newState = { ...this.state };

        if (btnType === "pick") {
            newState.click = 1;

            newState.clickCount = newState.click
                ? newState.clickCount + 1
                : newState.clickCount;
        } else {
            newState.click = false;
        }

        this.setState(newState)
        this.shuffleGroup();
    };

    shuffleGroup = () => {
        API.getRandomPhotos()
            .then(res => 
                this.setState({
                image: res.data.message
            })).catch(err => console.log(err));
    }
    render() {
        return (
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                    <div>
                        <h4>This is where the image should be</h4>
                        <ImageCard image={this.state.image} handleClick={this.handleClick} />
                        <h1> Score {this.state.clickCount}</h1>
                    </div>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Home;