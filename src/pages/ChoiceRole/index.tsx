import { useNavigate } from "react-router-dom";

import { CardChoice, Container, ContainerCard, ContainerImg, ImageRole, TextChoice, Title } from "./styles";

import ImgDiarist from "../../assets/pessoas/diarista-cad.png";
import ImgEmployer from "../../assets/pessoas/img-employer-choice.png";

export function ChoiceRole(){
    const navigate = useNavigate();

    return(
        <Container>
            <Title>Escolha uma das modalidades abaixo:</Title>

            <ContainerCard>
                <CardChoice onClick={() => navigate(`/login/diarista`)}>
                    <ContainerImg>
                        <ImageRole src={ImgDiarist}/>
                    </ContainerImg>
                    <TextChoice>Diarista</TextChoice>
                </CardChoice>
                
                <CardChoice onClick={() => navigate(`/cadastro/contratante}`)}>
                    <ContainerImg>
                        <ImageRole src={ImgEmployer}/>
                    </ContainerImg>
                    <TextChoice>Contratante</TextChoice>
                </CardChoice>
            </ContainerCard>
        </Container>
    )
}