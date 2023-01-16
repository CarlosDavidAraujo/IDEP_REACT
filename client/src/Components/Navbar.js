import styled from "styled-components";
import { Button } from "./Button";
import logo from '../images/logo.png';

const StyledNavbar = styled.nav`
    z-index: 2000;
    position: sticky;
    top: 0px;
    background-color: var(--white);
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    box-shadow: rgba(0, 0, 0, 0.15) 0 2px 2.6px;
`;

const Start = styled.div`
    img {
        max-width: 200px;
    }
`;

const Center = styled.div`
    display: flex;
    margin-left: 5%;
    flex-grow: 1;
    gap: 5%;
    a {
        font-size: 18px;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    a:hover::after {
        content: "";
        position: absolute;
        background-color: var(--yellow);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-top: 40px;
    }
`;

const End = styled.div`
    display: flex;
    gap: 20px;
`;

export default function Navbar() {
    return (
        <StyledNavbar>
            <Start>
                <a href="/">
                    <img src={logo} alt="idepsocial" />
                </a>
            </Start>
            <Center>
                <a href="vagas">Vagas</a>
                <a href="/#parceiros">Parceiros</a>
                <a href="/#about">Quem somos</a>
                <a href="/#modalidades">Modalidades</a>
                <a href="/#onde-estamos">Onde estamos</a>
            </Center>
            <End>
                <Button as="a" href="/cadastro" color="transparent">Cadastre-se</Button>
                <Button as="a" href="/login" color='yellow'>Entrar</Button>
            </End>
        </StyledNavbar>
    )
}