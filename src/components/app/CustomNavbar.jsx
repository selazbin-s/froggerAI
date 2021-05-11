import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class CustomNavbar extends React.Component{
    render(){
        return (
            <div>
                <Navbar sticky="top" collapseOnSelect="false" variant="dark" bg="dark">
                    <Navbar.Brand href="#home"><h1>CPSC 362: Frogger</h1></Navbar.Brand>
                    <Nav justify="content-around" fill="True" className="ml-auto w-50">
                        <Nav.Item>
                            <Nav.Link active="false" className="text-info">
                                <Link to="/">
                                    <h2>About Us</h2>
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link active="false" className="text-info">
                                <Link to="/game">
                                    <h2>Game</h2>
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link active="false" className="text-info">
                                <Link to="/source">
                                    <h2>Source</h2>
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default CustomNavbar;
