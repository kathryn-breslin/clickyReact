import React, { Component } from "react";
import Card from "../components/PlantCard";
import Container from "../components/Container";
import Col from "../components/Col";
import plants from "../plants.json";
import "./Home.css"

let correctGuesses = 0; 
let score = 0; 
let click = 0; 

class Home extends Component {
    state = {
        plants,
        click,
        correctGuesses,
        score, 
    }

    handleClick = (event)=> {
    event.preventDefault();

    const newPlants = this.state.plants.sort(() => Math.random() - 0.5);
    this.setState(newPlants);
    this.setState({ click: this.state.click + 1 });

        // if ({click: this.state.click} >= 1 ) {
        //     this.setState({ plants: Math.floor(Math.random() + 1)});
        // }
    };

    // handleShuffle = () => {
    //     // const shufflePlants = {...this.state};
    //     this.setState({ plants: Math.floor(Math.random())});
    // }

    render() {
        return (
            <Container style={{ marginTop: 30 }}>
                <Col size="md-6">
                    <div>
                        <p>Click Count: {this.state.click}</p>
                    </div>
                </Col>
                <Col size="md-12">
                    {this.state.plants.map(plant => (
                        <button onClick={this.handleClick} key={plant.id}>
                            <Card  
                            image={plant.image}
                        />
                        </button>
                    ))}
                </Col>
            </Container>
        )
    }
}
export default Home;