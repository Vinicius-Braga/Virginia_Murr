import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.scss";

function About() {
    return (
        <Container className="mt-3 about" id="About">
            <Row>
                <div className="about_title">
                    <h2 className="display-4 my-5">Sobre</h2>
                </div>
            </Row>
            <Row>
                <Col xs={12} lg={7} className="mb-5 mt-5 mg-lg-0 px-5 px-lg-0 about_description">
                    <Row className="mb-2 mt-4 ms-lg-5 me-lg-4">
                        A vida que você deseja viver pode estar na sua frente, mas para isso é preciso consciência, abertura e
                        ações comprometidas para nos aproximarmos dela.
                    </Row>
                    <Row className="mb-2 mt-4 ms-lg-5 me-lg-4">
                        É nisso que acredito, e quero te possibilitar entrar em contato com essa perspectiva de vida!
                    </Row>
                    <Row className="mb-2 mt-4 ms-lg-5 me-lg-4">
                        Sou psicóloga clínica desde 2012, especialista em Terapias Comportamentais Contextuais.
                    </Row>
                    <Row className="mb-3 mt-4 ms-lg-5 me-lg-4">
                        Mas também sou uma pessoa imperfeita, buscando viver a melhor vida possível, e amo me conectar com pessoas
                        e acompanhar a transformação da vida delas.
                    </Row>
                </Col>
                <Col xs={12} lg={5}>
                    <div className="foto">
                        <h3 className="ft">Foto Virginia</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
