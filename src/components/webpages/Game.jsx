import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../frogger/sketch';

class Game extends React.Component {
    render() {
        return (
            <div className="w-50 mx-auto">
                <P5Wrapper sketch={sketch}></P5Wrapper>
            </div>
        );
    }
}

export default Game;