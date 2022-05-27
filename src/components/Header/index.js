import React from "react";
import "./style.css";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Home from '../home/Home/index';

export default function Header() {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Manhattan Crush</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>                        
                            
                        </Nav>
                        <Form className="d-flex">
                            <Button variant="outline-success" className="me-2">Iniciar sesion</Button>                            
                            <Button variant="outline-success">Registro</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Switch>
                {/* <Route path="/Prueba">
                    <Prueba />
                </Route> */}
                
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </>
    );
}