import styled from "styled-components";
import { Button } from "./Button";
import assai from "../images/assai.png";
import delfa from "../images/delfa.png";
import globalsys from "../images/globalsys.png";
import ipark from "../images/ipark.png";
import Title from "./Title";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
    margin: 50px 10% 0 10%;
    margin-top: var(--home-container-mg-top);
    ${Title} {
        margin-left: auto;
    }
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: max(3%, 20px);
    img{
        max-height: 190px;
        border: 2px solid var(--blue);
        aspect-ratio: 1/1;
        object-fit: scale-down;
    }
`;

export default function Parceiros() {
    return (
        <Container>
            <Title>
                Parceiros
            </Title>
            <Content>
                <img src={assai} alt="assai"/>
                <img src={globalsys} alt="globalsys"/>
                <img src={delfa} alt="delfa"/>
                <img src={ipark} alt="ipark"/>
            </Content>
            <Button as="a" href="#parceiros" color="yellow" size="large">Ver todos os parceiros</Button>
        </Container>
    )
}