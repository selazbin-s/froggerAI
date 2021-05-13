import React from 'react';
import Card from 'react-bootstrap/Card';
import Gallery from 'react-photo-gallery';
import TechPhotoSet from '../app/TechPhotoSet';
import ListGroup from 'react-bootstrap/ListGroup';

class Source extends React.Component {
    render() {
        return (
            <div className="w-50 mx-auto">
                <Card className="my-4">
                    <Card.Header className="h3">The Game</Card.Header>
                    <Card.Body>
                        <Card.Title>Frogger, an overview</Card.Title>
                        <Card.Text>Our Frogger game was modeled after the original 1980s arcade game created by Sega. It assumes that all objects are rectangles and primarily is concerned with if two objects are intersecting. If two objects are intersecting, a frog object and car object for example, then it assumes that the frog has been squashed by the car and the frog must re-spawn at the starting position. The game can be played over and over until the frog finally reaches the end of the river without running into any objects. </Card.Text>
                        <Card.Title>Devloping the game</Card.Title>
                        <Card.Text>The game was devloped with P5.js with an included P5 to React wrapper (necessary for running P5 code within React). Most of the game's code revolves around a single class with some variants thrown in for image settings and game logic.</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="my-4">
                    <Card.Header className="h3">The Ai</Card.Header>
                    <Card.Body>
                        <Card.Title>The AI</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="my-4">
                    <Card.Header className="h3">The Products In Use</Card.Header>
                    <Card.Body>
                        <Card.Title>Website Products</Card.Title>
                        <Card.Body>
                            <Card.Title> For Devloping The Game</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>
                                    P5.js
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title> For Devloping The Website</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>
                                    React.js
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Bootstrap CSS
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title> For Devloping The AI</Card.Title>
                            <ListGroup>
                                <ListGroup.Item>
                                    Python
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    PyGame
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Q-Learning
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card.Body>
                </Card>
                <Gallery photos={TechPhotoSet} direction={"column"}/>
            </div>
        );
    }
}

export default Source;