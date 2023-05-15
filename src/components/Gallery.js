import React from "react";
import "./Gallery.scss";
import { Row, Col, Container, Card } from "react-bootstrap";

import Insta1 from "../assets/insta1.png";
import Insta2 from "../assets/insta2.png";
import Insta3 from "../assets/insta3.png";
import Insta4 from "../assets/insta4.png";
import Insta5 from "../assets/insta5.png";
import Insta6 from "../assets/insta6.png";
import Insta7 from "../assets/insta7.png";
import Insta8 from "../assets/insta8.png";
import Insta9 from "../assets/insta9.png";

function Gallery() {
    return (
        <div className="gallery" id="Gallery">
            <Container>
                <Row>
                    <div className="gallery_title mb-5">
                        <h2 className="display-4 my-5">Galeria</h2>
                    </div>
                </Row>
                <Row className="mb-5">
                    <Col xs={12} sm={6} lg={4}>
                        <Card className="insta_post">
                            <Card.Img src={Insta1} className="insta_img" />
                            <Card.Body>
                                1. O quadro não gera efeitos físicos Mentira. Dependendo do grau de ansiedade e do fator que
                                dispara uma crise, essa condição pode gerar efeitos físicos intensos, como dificuldade para
                                respirar, tensão muscular, dores localizadas e aceleração da frequência cardíaca.
                                <br />
                                <br />
                                De maneira crônica, trata-se de algo que pode gerar efeitos negativos no organismo em si, como ao
                                aumentar o risco de doenças orgânicas, inclusive aumentando os níveis do cortisol, hormônio
                                associado ao estresse. De fato, quem sofre com o problema e com a depressão tem 60% a mais de
                                chances de sofrer um infarto, por exemplo.
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <Card className="insta_post">
                            <Card.Img src={Insta2} className="insta_img" />
                            <Card.Body>
                                aí, você esta contente onde está??
                                <br />
                                <br />
                                Quantas vezes já se pegou pensando: “Eu não gosto do meu trabalho”, “Não me sinto uma pessoa
                                valorizada no que faço”, “Preciso melhorar minha vida”, “Preciso perder peso”, "Meu dinheiro não
                                dá pra nada", “Quero empreender e não sei como”, etc.
                                <br />
                                <br />
                                Falamos tanto mudar, se conhecer, buscar melhorar, e muitas vezes buscamos essas mudanças pelo
                                lado de fora.
                                <br />
                                <br />
                                Um corte de cabelo, roupa nova, uma unha diferente, um tênis tendência, um jogo de futebo...
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <Card className="insta_post">
                            <Card.Img src={Insta3} className="insta_img" />
                            <Card.Body>
                                Quando procuramos um profissional da área da saúde é porque observamos alguns sinais ou sintomas
                                que nos levam a pensar que podemos estar com alguma doença física.
                                <br />
                                <br />
                                Existe uma diferença entre sinais e sintomas, que de uma maneira resumida, segue abaixo.
                                <br />
                                <br />
                                Sinal é uma manifestação clínica que outra pessoa percebe, principalmente profissionais de saúde,
                                mas nem sempre percebida pelo paciente.
                                <br />
                                <br />
                                Confie no profissional, confi...
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs={12} sm={6} lg={4}>
                        <Card className="insta_post">
                            <Card.Img src={Insta4} className="insta_img" />
                            <Card.Body>Autocuidado para desenvolver autoconfiança 🦋</Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <Card className="insta_post">
                            <Card.Img src={Insta5} className="insta_img" />
                            <Card.Body>
                                Todo excesso esconde uma falta, você já ouvir esta expressão?
                                <br />
                                <br />
                                Quem não conhece alguem que se perdo no excesso, quiçá nós mesmas, muitas vezes nos vemos afogadas
                                em exageros que no fim vai nos gerar muita culpa, mas num primeiro momento buscamos o prazer,
                                buscamos comple..
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <Card className="insta_post">
                            <Card.Img src={Insta6} className="insta_img" />
                            <Card.Body>
                                Situações na quais as pessoas podem demonstrar dificuldade em dizer a palavra Não
                                <br />
                                - Comprar coisas que não quer porque não consegue falar "não" para o vendedor.
                                <br />
                                - Não conseguir provar uma roupa e sair da loja sem comprar.
                                <br />- Não devolver produtos adquiridos com def...
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs={12} sm={6} lg={4}>
                        <Card className="insta_post">
                            <Card.Img src={Insta7} className="insta_img" />
                            <Card.Body>
                                Você tem noção que o tempo vai passar de qualquer forma?
                                <br />
                                <br />
                                Que independente do que você faça ou deixe de fazer, nada vai impedir que ele avance?
                                <br />
                                Então, se você soubesse que poderia fazer algo para que quando o "futuro" venha bater a sua porta
                                tivesse a certeza que fez o seu melhor, você faria?
                                <br />
                                E para chegar nesse futuro, o primeiro passo é o mais importante.
                                <br />
                                Pode ser que ele não te leve onde quer ir de verdade e de primeira, mas ele com certe
                                <br />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <Card className="insta_post">
                            <Card.Img src={Insta8} className="insta_img" />
                            <Card.Body>
                                Já passou por aqueles momentos em que nada a sua volta lhe deixa satisfeito ou com o mínimo de
                                gratidão? Embora não seja ideal nos acomodarmos com a situação em que nos encontramos, caso esta
                                não esteja agradando, sempre existe algo a sua volta que você conquistou e que merece a sua
                                valorização!
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <Card className="insta_post">
                            <Card.Img src={Insta9} className="insta_img" />
                            <Card.Body>
                                Já parou para pensar que tudo depende de como vemos as coisas? Depende da interpretação que
                                fazemos daquilo que de alguma forma entramos em contato.
                                <br />
                                <br />
                                Que tal começarmos a prestar mais atenção na qualidade de como vemos essas coisas?
                                <br />
                                <br />
                                Fazer dos limões que a vida nos dá , uma ?.. vocês já sabem a resposta!
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Gallery;
