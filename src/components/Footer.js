import React from "react";
import "./Footer.scss";
import Logo from "../assets/logo_nome.png";
import { Row, Col, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row className="links">
                    <Col sm={12} lg={6} className="footer_logo">
                        <Image src={Logo} className="footer_logo_image" />
                    </Col>
                    <Col sm={12} lg={6} className="icons">
                        <a href="https://www.instagram.com/psicovirginiamurr/">
                            <FontAwesomeIcon icon={faInstagramSquare} style={{ color: "#f2b2b3" }} className="icon" />
                        </a>
                        <a href="https://www.facebook.com/virginia.murr.3">
                            <FontAwesomeIcon icon={faFacebookSquare} style={{ color: "#f2b2b3" }} className="icon ms-4" />
                        </a>
                        <a href="https://wa.me/5551992823116?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">
                            <FontAwesomeIcon icon={faWhatsappSquare} style={{ color: "#f2b2b3" }} className="icon ms-4" />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <p className="signature">
                        © 2023 por Virginia Murr. Criado por <a href="https://www.linkedin.com/Vinicius-Braga">Vinicius Braga</a>.
                    </p>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
