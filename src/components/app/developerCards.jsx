import React from 'react';
import {Card} from 'react-bootstrap';
import '../../index.css'
class DeveloperCard extends React.Component{
    renderCard(card){
        return(
            <Card className="my-4 text-center" bg="dark" text="white">
                <Card.Img src={card.image}/>
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Subtitle>{card.role}</Card.Subtitle>
                    <Card.Text>{card.description}</Card.Text>
                    <Card.Link active="false" href={card.github}>Github</Card.Link>
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