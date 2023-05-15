import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./Navbar.scss";

function Navigation({ action }) {
    return (
        <header className="navigation">
            <Navbar expand="lg" variant="dark" className={action ? "activateColor" : ""}>
                <Container>
                    <Link to="Hero">
                        <img src={Logo} alt="Virginia Murr" className="logo" />
                    </Link>
                    <Navbar.Brand className="name" href="#home">
                        Virginia Murr
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav">
                            <Link to="Hero" spy={true} smooth={true} offset={-50} duration={500}>
                                <Nav.Link className="nav_objects">Início</Nav.Link>
                            </Link>
                            <Link to="About" spy={true} smooth={true} offset={-50} duration={500}>
                                <Nav.Link className="nav_objects">Sobre mim</Nav.Link>
                            </Link>
                            <Link to="Services" spy={true} smooth={true} offset={-50} duration={500}>
                                <Nav.Link className="nav_objects">Serviços</Nav.Link>
                            </Link>
                            <Link to="Gallery" spy={true} smooth={true} offset={-50} duration={500}>
                                <Nav.Link className="nav_objects">Galeria</Nav.Link>
                            </Link>
                            <Link to="Contact" spy={true} smooth={true} offset={-50} duration={500}>
                                <Nav.Link className="nav_objects">Contato</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav>
                            <a href="https://wa.me/5551992823116?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">
                                <button variant="outline" className="nav_button">
                                    Agende sua consulta
                                </button>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Navigation;
