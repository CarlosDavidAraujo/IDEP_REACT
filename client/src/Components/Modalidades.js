import styled from "styled-components";
import Title from "./Title";
import menina from '../images/menina-da-escola.png';
import estagio from '../images/estagio.png';
import pasta from '../images/pasta.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--home-container-mg-top);
    padding: 3em;
    gap: 5em;
    background-color: var(--blue);
    ${Title} {
        margin-left: auto;
        color: var(--white);
    }
`;

const Content= styled.div`
    display: flex;
    gap: 1.5em;
    justify-content: center;
    width: min(95%, 1240px);
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: var(--white);
    border-radius: 2px;
    padding: 0 3em 2em 3em;
    img {
        width: 100px;
        margin-top: -50px;
    }
    
`;

const ItemBody = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2em;
    font-size: 1.125em;
    ul {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
`;

export default function Modalidades() {
    return (
        <Container id="modalidades">
            <Title>Modalidades</Title>
            <Content>
                <Item>
                    <img src={menina} alt='menina da escola' />
                    <ItemBody>
                        <h2>Jovem Aprendiz</h2>
                        <ul>
                            <li>Ensino atrelado com a prática profissional</li> 
                            <li>Idade entre 14 e 24 anos</li> 
                            <li>Registro na carteira de trabalho</li> 
                            <li>Limite da jornada de trabalho de 26 horas semanais</li> 
                            <li>Amparado pela lei 10.097</li> 
                            <li>Direito a FGTS, INSS e 13°</li> 
                        </ul>
                    </ItemBody>
                </Item>
                <Item>
                    <img src={estagio} alt='menina da escola' />
                    <ItemBody>
                        <h2>Estágio</h2>
                        <ul>
                            <li>Precisa está vinculado a uma instituição de ensino</li> 
                            <li>Limite de 2 anos de contrato</li>
                            <li>Limite da jornada de trabalho 30 horas semanais</li> 
                            <li>Amparado pela lei 11.788</li> 
                        </ul>
                    </ItemBody>
                </Item>
                <Item>
                    <img src={pasta} alt='menina da escola' />
                    <ItemBody>
                        <h2>CLT</h2>
                        <ul>
                            <li>Limite da jornada de trabalho 44 horas semanais</li>
                            <li>Direito a FGTS, INSS e 13°</li> 
                            <li>Férias remuneradas</li> 
                            <li>Licença maternidade e paternidade</li> 
                            <li>Seguro desemprego</li> 
                        </ul>
                    </ItemBody>
                </Item>
            </Content>
        </Container>
    )
}