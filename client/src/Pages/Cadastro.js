import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../Components/Button";
import Input from "../Components/Input";
import Select from "../Components/Select";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    @media (max-width: 1200px) {
        max-width: 400px;
        flex-wrap: wrap;
    }
`;

const Row = styled.div`
    display: flex;
    gap: 4%;
    &.submit-row {
        justify-content: flex-end;
        gap: 20px;
    }

    @media (max-width: 1200px) {
        max-width: 400px;
        flex-wrap: wrap;
    }
`;

const Form = styled.form`
    width: min(95%, 1240px);
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h4 {
        color: var(--blue);
    }
`;

export default function Cadastro() {
    const [inputs, setInputs] = useState([{ inicio: [] }]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const pessoa = {
            CPF: inputs.CPF,
            password: inputs.password,
            nome: inputs.nome,
            social: inputs.social,
            genero: inputs.genero,
            nascimento: inputs.nascimento,
            email: inputs.email,
            telefone: inputs.telefone,
            municipio: inputs.municipio,
            bairro: inputs.bairro
        }
        const formacao = {
            grau: inputs.grau,
            curso: inputs.curso,
            instituicao: inputs.instituicao,
            inicio: inputs.inicioFormacao,
            termino: inputs.terminoFormacao
        }
        axios.post('/api/cadastro', { pessoa, formacao });
    }



    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Column>
                    <Column>
                        <h4>Informa????es de login</h4>
                        <Input label='CPF*' name='CPF' required='required' onChange={handleChange} />
                        <Input label='Senha*' name='password' required='required' onChange={handleChange} />
                    </Column>
                    <Column>
                        <h4>Informa????es pessoais</h4>
                        <Input label='Nome completo*' name='nome' required='required' onChange={handleChange} />
                        <Input label='Nome social' name='social' onChange={handleChange} />
                        <Row>
                            <Input label='G??nero*' name='genero' required='required' onChange={handleChange} />
                            <Input type='date' label='Data de nascimento*' name='nascimento' required='required' onChange={handleChange} />
                        </Row>
                        <Input label='Email*' name='email' required='required' onChange={handleChange} />
                        <Input label='Telefone*' name='telefone' required='required' onChange={handleChange} />
                        <Row>
                            <Input label='Municipio*' name='municipio' required='required' onChange={handleChange} />
                            <Input label='Bairro*' name='bairro' required='required' onChange={handleChange} />
                        </Row>
                    </Column>
                </Column>
                <Column>
                    <h4>Informa????es acad??micas</h4>
                    <Select
                        onChange={handleChange}
                        label='Grau'
                        name='grau'
                        options={[{ label: 'selecione', value: '', selected: true, disabled: true },
                        { label: 'Ensino fundamental completo', value: 'Ensino fundamental completo' },
                        { label: 'Ensino fundamental incompleto', value: 'Ensino fundamental incompleto' },
                        { label: 'Ensino m??dio completo', value: 'Ensino m??dio completo' },
                        { label: 'Ensino m??dio incompleto', value: 'Ensino m??dio incompleto' },
                        { label: 'Ensino superior completo', value: 'Ensino superior completo' },
                        { label: 'Ensino superior incompleto', value: 'Ensino superior incompleto' }]}
                    />
                    <Input label='Curso' name='curso' onChange={handleChange} />
                    <Input label='Institui????o' name='instituicao' onChange={handleChange} />
                    <Row>
                        <Input type='date' label='In??cio' name='inicioFormacao' onChange={handleChange} />
                        <Input type='date' label='T??rmino' name='terminoFormacao' onChange={handleChange} />
                    </Row>
                </Column>
                <Column>
                    <h4>Experi??ncias profissionais</h4>
                    <Select
                        onChange={handleChange}
                        label='Modalidade'
                        name='modalidade'
                        options={[{ label: 'selecione', value: '', selected: true, disabled: true },
                        { label: 'CLT', value: 'CLT' },
                        { label: 'Est??gio', value: 'Est??gio' },
                        { label: 'Jovem aprendiz', value: 'Jovem aprendiz' },]}
                    />
                    <Input label='Cargo' name='cargo' onChange={handleChange} />
                    <Input label='Empresa' name='empresa' onChange={handleChange} />
                    <Row>
                        <Input type='date' label='In??cio' name='inicio' onChange={handleChange} />
                        <Input type='date' label='T??rmino' name='termino' onChange={handleChange} />
                    </Row>
                </Column>
            </Row>
            <Row className="submit-row">
                <Button color="red" outline>Cancelar</Button>
                <Button as='input' type='submit' color="yellow" value='Cadastrar-se' />
            </Row>
        </Form>
    );
}