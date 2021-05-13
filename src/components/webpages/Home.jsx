import React from 'react';
import DeveloperCard from '../app/DeveloperCards';
import { CardDeck } from 'react-bootstrap';
import { developers } from '../app/Developers';

class Home extends React.Component{
    render(){
        return(
            <div>
                <CardDeck className = "w-50 mx-auto">
                    {developers.map((dev) => (
                        <DeveloperCard items={dev} />
                    ))}
                </CardDeck>
            </div >
        );
    }
}

export default Home;