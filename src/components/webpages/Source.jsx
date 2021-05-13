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
                        <Card.Title>An overview about devloping the game</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. </Card.Text>
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