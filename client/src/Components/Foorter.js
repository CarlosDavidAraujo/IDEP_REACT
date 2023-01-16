import styled from "styled-components";

const Container = styled.div`
    bottom: 0;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--blue);
    padding: 20px 0;
    margin-top: auto;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: min(95%, 1240px);
    img {
        width: 300px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    a, h4 {
        color: var(--white);
        font-size: 18px;
        font-weight: 600;
    }
    p {
        color: var(--white);
    }
`;

export default function Footer() {
    return (
        <Container>
            <Content>
                <Column>
                    <a href="vagas">Vagas</a>
                    <a href="parceiros">Empresas</a>
                </Column>
                <Column>
                    <a href="/#about">Quem somos</a>
                    <a href="/#modalidades">Modalidades</a>
                </Column>
                <Column>
                    <a href="/#localizacao">Onde estamos</a>
                    <p>Rua 16, n° 130, Jereissati I, <br />
                        Maracanaú - CE </p>
                </Column>
                <Column>
                    <h4>Contato</h4>
                    <p><i class="fa-solid fa-phone"></i> 3015-3641</p>
                    <p><i class="fa-brands fa-whatsapp"></i> 85 8545-1456</p>
                </Column>
                <Column>
                    <h4>Nossas redes sociais</h4>
                    <p><i class="fa-brands fa-instagram"></i> idepsocial</p>
                    <p><i class="fa-brands fa-facebook"></i> idepsocial</p>
                </Column>
            </Content>
        </Container >
    )
}