import React from "react";
import "./Hero.scss";
import Logo from "../assets/logo_nome.png";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Hero() {
    return (
        <Card className="text-center text-light hero" id="Hero">
            <Row className="mt-sm-5 my-lg-5 hero_itens">
                <Col lg className="text-lg-end my-lg-5">
                    <img src={Logo} alt="Virginia Murr" className="hero_logo" />
                </Col>
                <Col lg className="text-lg-start  ">
                    <p>"Tudo é processo, só confia"</p>
                    <a href="https://wa.me/5551992823116?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">
                        <Button variant="outline-light">Agende sua consulta</Button>
                    </a>
                    <Col className="icons_hero">
                        <a href="https://www.instagram.com/psicovirginiamurr/">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffff" }} className="icon_hero" />
                        </a>
                        <a href="https://www.facebook.com/virginia.murr.3">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffff" }} className="icon_hero" />
                        </a>
                        <a href="https://wa.me/5551992823116?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">
                            <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffff" }} className="icon_hero" />
                        </a>
                    </Col>
                </Col>
            </Row>
        </Card>
    );
}

export default Hero;
