import styled from "styled-components";
import Title from "./Title";
import img1 from '../images/young-adults.jpg';
import img2 from '../images/adults.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(95%, 1240px);
    margin: 0 auto;
    margin-top: var(--home-container-mg-top); 
    gap: 1.5em;
    ${Title} {
        margin-right: auto;
    }
`;

const Row = styled.div`
    .first-img {
        float: right;
        width:50%;
        margin-left: 1.5em;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .second-img {
        float: left;
        width: 50%;
        margin-right: 1.5em;
        img {
            width: 100%;
            object-fit: cover;
        }
    }
    .first-text {
        margin-top: 3.5em;
        font-size: 1.25em;
        font-weight: 400;
        text-align: justify;
    }
    .second-text {
        margin-bottom: 3.5em;
        font-size: 1.25em;
        font-weight: 400;
        text-align: justify;
    }
`;

export default function About() {
    return (
        <Container id="about">
            <Title>
                Quem somos
            </Title>
            <Row>
                <figure className="first-img">
                    <img src={img1} alt="img1" />
                </figure>
                <p className="first-text">O Instituto Social para o Desenvolvimento de Potencialidades
                    é uma organização da sociedade civil - OSC, independente
                    e sem fins lucrativos, fundada em 2012 a partir da idealização
                    de um instituto que trabalhasse com a crença no potencial criativo
                    e inovador das pessoas, dando ênfase às temáticas relacionadas
                    ao mundo do trabalho e aos Direitos Humanos.<br /> <br />
                    Proporcionamos às/aos participantes de nossas atividades espaços de discussão,
                    visando a partilha de experiências e o encontro com novas possibilidades e realidades.
                    Além disso, focamos na (des)construção dos saberes, para que cada sujeito
                    se perceba corresponsável por si mesmo e pelos outros (sociedade e demais seres vivos).
                </p>
            </Row>
            <Row>
                <figure className="second-img">
                    <img src={img2} alt="img1" />
                </figure>
                <p className="second-text">
                Por acreditarmos que a educação é um processo que envolve reflexão,
                ação e escuta pedagógica centralizada na vida, o IDEP Social desenvolve vivências,
                através de programas e projetos, que buscam a promoção de uma sociedade democrática
                e socialmente justa. <br/> <br/>
                Atuamos junto às populações nas quais incidem diversos marcadores sociais,
                como raça, gênero, classe, território, religiosidade e deficiência, priorizando as juventudes.
                </p>
            </Row>
        </Container>
    )
}