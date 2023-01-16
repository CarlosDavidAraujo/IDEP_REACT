import styled from "styled-components";
import Card from "../Components/Card";

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 50px;
    &:after {
        content: "";
        display: block;
        height: 150px;
    }
    h2 {
        font-size: 24px;
        font-weight: 600;
        color: var(--blue);
    }
`;

const Content = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 20px;
    column-gap: 20px;
`;

export default function MinhasVagas() {
    return (
        <Container>
            <h2>Meus processos seletivos</h2>
            <Content>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Content>
        </Container>
    )
}
