import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Card from "../components/PlantCard";
import Container from "../components/Container";
import Col from "../components/Col";
import plants from "../plants.json";
import "./Home.css"

class Home extends Component {
    state = {
        plants,
        currentScore: 0,
        maxScore: 0,
        clicked: [],
    }

    shuffleArray = () => {
        this.state.plants.sort(() => Math.random() - 0.5);
    }

    handleClick = (id) => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.setState({ clicked: this.state.clicked.concat(id) })
            this.increaseClick();
        } else {
            this.resetImages();
        }
    };

    increaseClick = () => {
        const newScore = this.state.currentScore + 1;
        // this.setState({ click: this.state.click + 1 });

        this.setState({ currentScore: newScore });

        if (newScore >= this.state.maxScore) {
            this.setState({ maxScore: newScore })
        }
        else if (newScore === 12) {
            console.log("You win!")
        }
        this.shuffleArray();
    }

    resetImages = () => {
        this.setState({
            currentScore: 0,
            maxScore: this.state.maxScore,
            clicked: [],
        });
        this.shuffleArray();
    }

    render() {
        return (
            <Wrapper>
                <Nav
                    score={this.state.currentScore}
                    totalScore={this.state.maxScore}>
                </Nav>
                <Header>
                </Header>
                <Container style={{ marginTop: 30 }}>
                    <Col size="md-12">
                        {this.state.plants.map(plant => (
                            // <button onClick={this.handleClick} key={plant.id}>
                            <Card
                                shuffleArray={this.shuffleArray}
                                handleClick={this.handleClick}
                                resetImages={this.resetImages}
                                increaseClick={this.increaseClick}
                                key={plant.id}
                                id={plant.id}
                                image={plant.image}
                            />
                            // </button>
                        ))}
                    </Col>
                </Container>
            </Wrapper>
        )
    }
}

export default Home;