import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../webpages/Home'
import Game from '../webpages/Game';
import Source from '../webpages/Source';
import CustomNavbar from './CustomNavbar';

class App extends React.Component{
    render(){
        return (
            <main>
                <CustomNavbar />
                <Switch>
                    <Route path="/"exact> <Home /> </Route>
                    <Route path="/game"> <Game /> </Route>
                    <Route path="/source"> <Source /> </Route>
                </Switch>
            </main>
        );
    }
}
export default App;