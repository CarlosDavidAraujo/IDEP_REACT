import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Modal from "./Modal";
import ProgressBar from "./ProgressBar";
import logo from "../images/globalsys.png"

// Estilização do Card.
const StyledCard = styled.div`
    background-color: var(--blue);
    aspect-ratio: 3/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Header = styled.div`
    font-size: 13px;
    font-weight: 500;
    margin-bottom: auto;
    background-color: var(--yellow);
    min-width: 70px;
    border-radius: 20px;
    padding: 0 5px;
    display: flex;
    justify-content: center;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--white);
    h3 {
        font-size: 24px;
        font-weight: 600;
    }
    h4 {
        font-size: 13px;
    }
`;

const Footer = styled.div`
    margin-top: auto;
`;

//Estilização do Modal.
const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Vaga = styled.div`
    h2 {
        font-size: 36px;
        font-weight: 600;
        color: var(--blue);
    }
    h3 {
        font-size: 24px;
        font-weight: 400;
    }
`;

const Empresa = styled.div`
    max-width: 340px;
    max-height: 80px;
    margin-left: auto;
    img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }
`;

const Progresso = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    h3 {
        font-size: 18px;
        font-weight: 500;
        color: var(--blue);
    }
    h5 {
        margin-left: auto;
        font-size: 14px;
        font-weight: 400;     
    }
`;

const ModalBody = styled.div`
    display: flex;
    gap: 40px;
    max-height: 500px;
    overflow: hidden;
    overflow-y: auto;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    &:nth-child(2) {
        max-width: 470px;
    }
    h3 {
        font-size: 24px;
        font-weight: 700;
    }
    h4{
        font-size: 18px;
        font-weight: 600;
        color: var(--blue);
        border-bottom: 2px solid var(--blue);
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    p {
        font-size: 16px;
        font-weight: 400;
    }
`;

const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default function Card({ vaga }) {
    const [active, setActive] = useState(false);
    const inscrito = false;
    return (
        <StyledCard modalActive={active}>
            <Header>{vaga.modalidade}</Header>
            <Body>
                <h3>{vaga.cargo}</h3>
                <h4>{vaga.empresa}</h4>
            </Body>
            <Footer>
                <Button color="white" outline onClick={() => setActive(true)}>Ver mais detalhes</Button>
            </Footer>
            <Modal active={active} close={() => setActive(false)} onClickOut={() => setActive(false)}>
                <ModalHeader>
                    <Vaga>
                        <h2>{vaga.cargo}</h2>
                        <h3>Contratação {vaga.modalidade}</h3>
                    </Vaga>
                    <Empresa>
                        <img src={logo} alt="empresa" />
                    </Empresa>
                </ModalHeader>
                <Progresso>
                    <h3>Progresso do processo seletivo</h3>
                    <ProgressBar />
                    <h5>1/3</h5>
                </Progresso>
                <ModalBody>
                    <Section>
                        <h3>1. Essa vaga é para você?</h3>
                        <div>
                            <h4>Sobre a vaga</h4>
                            <p>{vaga.descricao}</p>
                        </div>
                        <div>
                            <h4>Responsabilidades e atribuições</h4>
                            <p>{vaga.atribuicao}</p>
                        </div>
                        <div>
                            <h4>Requisitos e qualificações</h4>
                            <p>{vaga.requisito}</p>
                        </div>
                    </Section>
                    <Section>
                        <Section>
                            <h3>2. Confira a nossa oferta!</h3>
                            <div>
                                <h4>Benefícios e vantagens</h4>
                                <p>{vaga.vantagem}</p>
                            </div>
                            <div>
                                <h4>Remuneração e carga horária</h4>
                                <p>{vaga.remuneracao}</p>
                            </div>
                        </Section>
                        <Section>
                            <h3>3. Conheça a empresa.</h3>
                            <p>{vaga.sobreEmpresa}</p>
                        </Section>
                    </Section>
                </ModalBody>
                <ModalFooter>
                    {inscrito ?
                        <Button color="red" outline>Desfazer candidatura</Button>
                        :
                        <Button color="yellow" size="medium">Candidatar-se</Button>
                    }
                </ModalFooter>
            </Modal>
        </StyledCard>
    )
}