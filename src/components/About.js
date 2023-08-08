import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.scss";
import virginia_perfil from '../assets/foto_perfil.jpg';

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
                        Meu nome é Virgínia IC Murr, psicóloga formada há mais de 30 anos. Apaixonada pela transformação e a revelação interna, fascinada pela psicoterapia e processos psicológicos nos proporciona e possibilita. 
                    </Row>
                    <Row className="mb-2 mt-4 ms-lg-5 me-lg-4">
                        O poder do reconhecimento, da "re"construção que conseguimos quando nos permitimos olhar para nós mesmos, conhecer nossos potenciais. 
                    </Row>
                    <Row className="mb-2 mt-4 ms-lg-5 me-lg-4">
                        Tenho confiança e certeza que a Psicologia é uma ferramenta, um instrumento que nos permite acolher nossas emoções, nossas dores e utiliza-las de maneira positiva, nada acontece por acaso e tudo é um processo. 
                    </Row>
                    <Row className="mb-2 mt-4 ms-lg-5 me-lg-4">
                        Sou graduada em Psicologia, pós graduada em Coaching e Aprendizado Organizacional, pós graduanda em Terapia Cognitivo Comportamental e Psicologia Corporal.  Cursos em Psicologia Sistêmica e do Esquema.
                    </Row>
                    <Row className="mb-2 mt-4 ms-lg-5 me-lg-4">
                        Será um prazer ajudá-lo em sua jornada de autoconhecimento e desenvolvimento pessoal, na sua metamorfose.
                    </Row>
                    <Row className="mb-3 mt-4 ms-lg-5 me-lg-4">
                        <b>Me chama e vamos conversar!!</b>
                    </Row>
                </Col>
                <Col xs={12} lg={5}>
                    <div className="foto">
                        <Image className="virginia_perfil" src={virginia_perfil}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
