import styled from "styled-components";
import Title from "./Title";

const Container = styled.div`
    width: min(95%, 1240px);
    margin: 50px auto;
    margin-top: var(--home-container-mg-top);
`;

const Content = styled.div`
    margin-top: 3em;
    display: flex;
    gap: 10%;
`;

const Endereco = styled.div`
    font-size: 1.5em;
    color: var(--blue);
`;

const Mapa = styled.div`
    width: min(95%, 500px);
    iframe {
        width: 100%;
        aspect-ratio: 3/2;
    }
`;


export default function Localizacao() {
    return (
        <Container>
            <Title>Onde estamos</Title>
            <Content>
                <Endereco>
                    <p>Rua 16, n° 130, Jereissati I, <br />
                        Maracanaú - CE
                    </p> <br />
                    <p><i class="fa-solid fa-phone"></i> 3015-3641</p> <br />
                    <p><i class="fa-brands fa-whatsapp"></i> 85 8545-1456</p> <br />
                </Endereco>
                <Mapa><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.686823983713!2d-38.62194859999999!3d-3.8771706000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7536d64c3cbdd%3A0x59c027c3b3a6281a!2sR.%20Dezesseis%2C%20130%20-%20Jereissati%20I%2C%20Maracana%C3%BA%20-%20CE%2C%2061900-230!5e0!3m2!1spt-BR!2sbr!4v1672952875063!5m2!1spt-BR!2sbr" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe></Mapa>
            </Content>
        </Container>
    )
}