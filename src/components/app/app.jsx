import React from 'react';
import CustomNavbar from './navbar';
import DeveloperCard from './developerCards';
import {CardDeck} from 'react-bootstrap';
import {developers} from './developers';

class App extends React.Component{
    render(){
        return(
            <div>
                <CustomNavbar />
                <CardDeck>
                    {developers.map((dev) => (
                    <DeveloperCard items={dev} />
                    ))}
                </CardDeck>
            </div>
        ); 
    }
}
export default App;