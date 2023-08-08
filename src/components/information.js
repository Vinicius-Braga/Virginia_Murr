import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./information.scss";

function Information() {
    return (
        <div className="information">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <span className="information_title">+5000</span> <br />
                        pacientes atendidos
                    </Col>
                    <Col xs={12} lg={6} className="information_colum">
                        <span className="information_title">+30</span>
                        <br />
                        anos de psicologia
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Information;
