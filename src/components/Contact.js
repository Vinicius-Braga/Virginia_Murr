import React from "react";
import "./Contact.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapPin } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div className="contact" id="Contact">
            <Container>
                <Row>
                    <div className="contact_title">
                        <h2 className="display-4 my-5">Contato</h2>
                    </div>
                </Row>
                <Row className="contact_information">
                    <Col sm={12} lg>
                        <Row>
                            <p>
                                <FontAwesomeIcon icon={faPhone} style={{ color: "#f2b2b3" }} className="contact_icon" />
                                +55 51 99282-3116
                            </p>
                        </Row>
                        <Row>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f2b2b3" }} className="contact_icon" />
                                virginia.murr@gmail.com
                            </p>
                        </Row>

                        <Row>
                            <p>
                                <FontAwesomeIcon icon={faMapPin} style={{ color: "#f2b2b3" }} className="contact_icon" />
                                Av. Brasil, 204 - Alegria, Guaíba - RS, 92727-020
                            </p>
                        </Row>
                    </Col>

                    <Col sm={12} lg className="attendance">
                        <Row>
                            <h3>Presencial</h3>
                        </Row>
                        <Row>
                            <p>Clínica DMT Guaíba</p>
                        </Row>
                        <Row>
                            <a href="https://wa.me/5551992823116?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">
                                <button variant="outline" className="attendance_button">
                                    Saiba Mais
                                </button>
                            </a>
                        </Row>
                    </Col>
                    <Col lg className="attendance">
                        <Row>
                            <h3>Online</h3>
                        </Row>
                        <Row>
                            <p>Chamada de Video</p>
                        </Row>
                        <Row>
                            <a href="https://wa.me/5551992823116?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">
                                <button variant="outline" className="attendance_button">
                                    Saiba Mais
                                </button>
                            </a>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <iframe
                        class="map"
                        width="100%"
                        frameborder="0"
                        title="DMT Guaíba"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=667&amp;height=400&amp;hl=en&amp;q=DMT guaiba&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
