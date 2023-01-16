import styled from "styled-components";
import Card from "../Components/Card";
import Input from "../Components/Input";
import Select from "../Components/Select";
import useGetData from '../CustomHooks/useGetData';

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 50px;
    &:after {
        content: "";
        display: block;
        height: 150px;
    }
`;

const Filtros = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    input {
        max-width: 540px;
        margin-left: auto;
    }
`;

const Content = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 20px;
    column-gap: 20px;
`;

export default function Vagas() {
    const vagas = useGetData('/api/vagas');

    return (
        <Container>
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
            <Content>
                {vagas.map((vaga, i)=>
                    <Card key={i} vaga={vaga}/>
                )}
            </Content>
        </Container>
    )
}