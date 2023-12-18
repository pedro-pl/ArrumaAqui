import { Card, CircleIcon, Container, ImageService, LineTitle, ServicesContainer, SubTitle, TextService, Title, TitleService } from "./styles";

import { Carousel } from "./Carousel";
import { servicos } from "../../../../mocks/listaServicos";

export function OurServices(){
    return(
        <Container>
            <Title><LineTitle/>NOSSOS SERVIÇOS<LineTitle/></Title>
            <SubTitle>ALGUNS SERVIÇOS QUE OFERECEMOS</SubTitle>
            <Carousel />
            <ServicesContainer>
                {servicos.map((servico) => (
                <Card key={servico.id}>
                    <CircleIcon key={servico.id}>
                    <ImageService src={servico.image} />
                    </CircleIcon>
                    <TitleService>{servico.titulo}</TitleService>
                    <TextService>{servico.descricao}</TextService>
                </Card>
                ))}
            </ServicesContainer>
        </Container>
    )
}