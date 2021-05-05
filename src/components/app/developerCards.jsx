import React from 'react';
import {Card} from 'react-bootstrap';

class DeveloperCard extends React.Component{
    constructor(props){
        super(props);
    }

    renderCard(card){
        return(
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={card.image} />
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    render(){
        const developer = this.props.items
        return(
            this.renderCard(developer)
        );
    }
}
export default DeveloperCard;