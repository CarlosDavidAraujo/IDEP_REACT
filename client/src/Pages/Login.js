import styled from "styled-components";
import students from '../images/students.png';
import Input from "../Components/Input";
import { Button } from "../Components/Button";
import { useRef, useState } from "react";
import axios from "axios";
import useGetData from "../CustomHooks/useGetData";

const Imagem = styled.div`
    overflow: hidden;
    height: 100vh;
    position: relative;
    img {
        position: absolute;
        width: 100%;
        top: -200px;
    }
`;

const Container = styled.div`
    width: 100%;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
    aspect-ratio: 6/5;
    width: min(80%, 650px);
    background-color: var(--blue);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 70%;
    gap: 30px;
    color: var(--white);
    h2 {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    a {
        color: var(--white);
    }
    a.recuperacao {
        margin-left: auto;
        margin-top: -20px;
    }
    div[type="checkbox"] {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: start;
        gap: 20px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [mensagem, setMensagem] = useState();

    function handleSubmit (e) {
        e.preventDefault();
        const password = passwordRef.current.value;
        const email = emailRef.current.value;
        axios.post('/api/login', {email, password}).then(res=> setMensagem(res.data))
    }

    return (
        <div>
            <Imagem>
                <img src={students} alt='students' />
            </Imagem>
            <Container>
                <Form onSubmit={handleSubmit}>
                    {mensagem && mensagem}
                    <h2>Seja bem-vindo!</h2>
                    <Input ref={emailRef} size='large' name='email' placeholder="Email" required='required' />
                    <Input ref={passwordRef} type='password' size='large' name='password' placeholder='Senha' required='required' />
                    <a className="recuperacao" href="#recuperacao">Recuperar senha</a>
                    <Input type='checkbox' label='Manter conectado' />
                    <Buttons>
                        <a href="cadastro">Cadastre-se</a>
                        <Button type="submit" color="yellow" size="medium">Entrar</Button>
                    </Buttons>
                </Form>
            </Container>
        </div>
    )
}