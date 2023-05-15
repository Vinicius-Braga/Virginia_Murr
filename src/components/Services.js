import React from "react";
import "./Services.scss";
import Terapia_adulto from "../assets/terapia_adulto.png";
import Terapia_crianca from "../assets/terapia-para-criancas.png";
import Terapia_casal from "../assets/291095-terapia-de-casal-vale-a-pena-entenda-mais.jpg.png";
import { Row, Col, Container, Image } from "react-bootstrap";

function Services() {
    return (
        <div className="services" id="Services">
            <Container>
                <Row>
                    <div className="services_title">
                        <h2 className="display-4 my-5">Serviços</h2>
                    </div>
                </Row>
                <Row className="service mt-5">
                    <Col xs={12} lg={6}>
                        <Row>
                            <h2 className="service_name">Terapia de adultos</h2>
                        </Row>
                        <Row>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Row>
                        <Row>
                            <a href="https://wa.me/5551992823116?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">
                                <button type="button" className="service_button">
                                    Saiba mais
                                </button>
                            </a>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Image src={Terapia_adulto} className="adult_terapy_image" />
                    </Col>
                </Row>
                <Row className="service mt-5">
                    <Col xs={12} lg={6}>
                        <Image src={Terapia_crianca} className="adult_terapy_image" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <Row>
                            <h2 className="service_name">Atendiamento a crianças</h2>
                        </Row>
                        <Row>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Row>
                        <Row>
                            <a href="https://wa.me/5551992823116?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">
                                <button type="button" className="service_button">
                                    Saiba mais
                                </button>
                            </a>
                        </Row>
                    </Col>
                </Row>
                <Row className="service mt-5">
                    <Col xs={12} lg={6}>
                        <Row>
                            <h2 className="service_name">Terapia de casais</h2>
                        </Row>
                        <Row>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Row>
                        <Row>
                            <a href="https://wa.me/5551992823116?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">
                                <button type="button" className="service_button">
                                    Saiba mais
                                </button>
                            </a>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Image src={Terapia_casal} className="adult_terapy_image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Services;
