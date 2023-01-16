import styled from "styled-components";
import homeImg from "../images/home-img.jpg";
import Parceiros from "../Components/Parceiros";
import About from "../Components/About";
import Modalidades from "../Components/Modalidades";
import Localizacao from "../Components/Localizacao";
import Slider from "../Components/Slider";
import Card from "../Components/Card";
import { Button } from "../Components/Button";
import useGetData from "../CustomHooks/useGetData";


const ImgContainer = styled.div`
    max-height: 600px;
    overflow: hidden;  
    img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 9/4;
    }
`;

const Vagas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Carousel = styled.div`
    width: min(85%, 1240px);
    height: 250px;
    margin: 0 auto;
    transform: translateY(-50%);
    ${Card} {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }
`;

export default function Home() {
    const vagas = useGetData('/api');

    return (
        <div>
            <ImgContainer>
                <img src={homeImg} alt="home-img" />
            </ImgContainer>
            <Vagas>
                <Carousel>
                    <Slider>
                        {vagas.map((vaga, i) =>
                            <Card key={i} vaga={vaga} />
                        )}
                    </Slider>
                </Carousel>
                <Button color="yellow" size='large'>Ver mais vagas</Button>
            </Vagas>
            <Parceiros />
            <About />
            <Modalidades />
            <Localizacao />
        </div>
    )
}