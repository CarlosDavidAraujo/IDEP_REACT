import styled from "styled-components";
import Input from "../Components/Input";
import Select from "../Components/Select";
import Card from "../Components/Card";
import ButtonGroup from "../Components/ButtonGroup";
import { useEffect, useState } from "react";
import { Button } from "../Components/Button";
import Modal from "../Components/Modal";
import TextArea from "../Components/TextArea";
import axios from "axios";
import useGetData from "../CustomHooks/useGetData";

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

//Aba das vagas
const Vagas = styled.div`
    display: flex;
    flex-direction: column;
    section {
        display: flex;
        flex-direction: column;
        ${Button} {
            margin-left: auto;
        }
    }
`;

const Filtros = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    ${Input} {
        max-width: 540px;
        margin-left: auto;
    }
`;

const Content = styled.div`
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 20px;
    column-gap: 20px;
`;

const ModalHeader = styled.div`
    display: flex;
    margin-right: 40px;
    gap: 20px;
    div {
        flex-grow: 1;
    }
`;

const ModalBody = styled.div`
    display: flex;
    gap: 40px;
    max-height: 500px;
    overflow: hidden;
    overflow-y: auto;
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        textarea {
            min-height: 150px;
            margin-top: -15px;
        }
    }
`;

const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;



export default function Dashboard() {
    const [activePageId, setActivePageId] = useState(0);
    const [modalActive, setModalActive] = useState(false);
    const [inputs, setInputs] = useState({});
    const vagas = useGetData('/api/dashboard');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = () => {
        console.log(inputs)
        axios.post('/api/dashboard', inputs)
    }

    return (
        <Container>
            <ButtonGroup buttons={['Vagas', 'Currículos', 'Gráficos']} changePage={setActivePageId} />
            {activePageId === 0 &&
                <Vagas>
                    <section>
                        <Button onClick={() => setModalActive(true)} size='medium' color="yellow">Criar nova vaga</Button>
                        <Filtros>
                            <Select
                                name='area'
                                options={[
                                    { label: 'Modalidade', value: "", selected: true, disabled: true },
                                    { label: 'Jovem Aprendiz', value: "Jovem Aprendiz" },
                                    { label: 'Estágio', value: "Estágio" },
                                    { label: 'CLT', value: "CLT" }
                                ]} />
                            <Select
                                name='area'
                                options={[
                                    { label: 'Localidade', value: "", selected: true, disabled: true },
                                    { label: 'Fortaleza', value: "Fortaleza" },
                                    { label: 'Caucaia', value: "Caucaia" },
                                    { label: 'Maracanaú', value: "Maracanaú" },
                                ]} />
                            <Select
                                name='area'
                                options={[
                                    { label: 'Empresa', value: "", selected: true, disabled: true },
                                    { label: 'Globalsys', value: 'Globalsys' },
                                    { label: 'Assaí Atacadista', value: "Assaí Atacadista" },
                                    { label: 'Delfa', value: "Delfa" },
                                ]} />
                            <Input type="search" placeholder="Pesquisar vagas" />
                        </Filtros>
                    </section>
                    <Modal active={modalActive} close={() => setModalActive(false)} onClickOut={() => setModalActive(false)}>
                        <ModalHeader>
                            <Input
                                name="cargo"
                                label="Nome da vaga"
                                required="required"
                                onChange={handleChange}
                            ></Input>
                            <Input
                                name="empresa"
                                label="Empresa"
                                required="required"
                                onChange={handleChange}
                            ></Input>
                            <Input
                                name="localidade"
                                label="Localidade"
                                required="required"
                                onChange={handleChange}
                            ></Input>
                            <Select
                                onChange={handleChange}
                                label='Modalidade'
                                name='modalidade'
                                options={[{ label: "", value: "", selected: true, disabled: true },
                                { label: 'CLT', value: 'CLT' },
                                { label: 'Jovem Aprendiz', value: 'Jovem Aprendiz' },
                                { label: 'Estágio', value: 'Estágio' }]}
                            />
                            <Select
                                onChange={handleChange}
                                label='Etapa'
                                name='etapa'
                                options={[{ label: "", value: "", selected: true, disabled: true },
                                { label: 'Envio de currículos', value: 'Envio de currículos' },
                                { label: 'Entrevista', value: 'Entrevista' },
                                { label: 'Finalizado', value: 'Finalizado' }]}
                            />
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                <h2>1. Essa vaga é para você?</h2>
                                <TextArea
                                    label='Sobre a vaga'
                                    name='descricao'
                                    required='required'
                                    onChange={handleChange}
                                />
                                <TextArea
                                    label='Responsabilidades e atribuições'
                                    name='atribuicao'
                                    required='required'
                                    onChange={handleChange}
                                />
                                <TextArea
                                    label='Requisitos e atribuições'
                                    name='requisito'
                                    required='required'
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div>
                                    <h2>2. Confira a nossa oferta!</h2>
                                    <TextArea
                                        label='Benefícios e vantagens'
                                        name='vantagem'
                                        required='required'
                                        onChange={handleChange}
                                    />
                                    <TextArea
                                        label='Remuneracão e carga horária'
                                        name='remuneracao'
                                        required='required'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <h2>3. Conheça a empresa.</h2>
                                    <TextArea
                                        name='sobreEmpresa'
                                        required='required'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button size='medium' color="red" outline onClick={() => setModalActive(false)}>Cancelar</Button>
                            <Button size='medium' color="yellow" onClick={handleSubmit}>Salvar</Button>
                        </ModalFooter>
                    </Modal>
                    <Content>
                        {vagas.map(vaga =>
                            <Card vaga={vaga} />
                        )}
                    </Content>
                </Vagas>}
            {activePageId === 1 && <div>curriculos</div>}
            {activePageId === 2 && <div>graficos</div>}
        </Container>
    )
}