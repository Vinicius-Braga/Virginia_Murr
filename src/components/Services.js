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
                                Qualquer pessoa está sujeita a viver situações de conflitos e sentimentos perturbadores, que geram questionamentos e/ou sofrimento emocional. Logo o processo terapêutico, promove um movimento de questionamentos, análises e reflexões na intenção de transformar e reconstruir sentidos para mudar o olhar e a percepção do paciente, auxiliando a buscar novas maneiras de enxergar sua realidade e formas mais saudáveis de se posicionar diante de conflitos, problemas e situações de vida. 

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
                                Mesmo sendo uma das mais belas fases da vida, na infância podem surgir dificuldades emocionais que se contrapõem ao desenvolvimento natural. É uma fase do desenvolvimento e maturação neurocognitiva  de grande importância, dada as janelas de oportunidade cerebrais que se encontram bem sensíveis e “abertas”, segundo Adriana Fóz, neuropsicóloga e diretora clínica da Unidade Integrativa Santa Mônica. É preciso ficar atento, procurar informações sérias e confiáveis e se dificuldades e dúvidas persistirem, procurar ajuda e orientação é salutar. Nesses casos, a terapia infantil pode auxiliar a criança a superar seus problemas, além de direcionar os pais ao melhor modo de lidar com essas situações.
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
                            Muitas pessoas relutam em admitir quando têm problemas, sejam eles profissionais, familiares, questões internas ou conjugais.Esse comportamento de negar um problema acaba causando impactos negativos, principalmente quando os conflitos envolvem uma segunda pessoa. Isso acontece porque um relacionamento a dois é muito complexo: saber qual é a sua parcela de contribuição para o surgimento e desenvolvimento desses conflitos, entender que nem tudo acontece da maneira que você planeja, respeitar o espaço e as limitações do outro e aprender a equilibrar as ações, sabendo a hora certa de ceder e de se valorizar são alguns dos muitos detalhes que fazem a diferença na construção de uma relação conjugal.
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
