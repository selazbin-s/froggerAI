import React from 'react';
import Card from 'react-bootstrap/Card';
import Gallery from 'react-photo-gallery';
import TechPhotoSet from '../app/TechPhotoSet';

class Source extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>The Game</Card.Header>
                    <Card.Body>
                        <Card.Title>An overview about devloping the game</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>The Ai</Card.Header>
                    <Card.Body>
                        <Card.Title>The AI</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>The Game</Card.Header>
                    <Card.Body>
                        <Card.Title>An overview about devloping the game</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. </Card.Text>
                    </Card.Body>
                </Card>
                <Gallery photos={TechPhotoSet} direction={"column"}/>
            </div>
        );
    }
}

export default Source;