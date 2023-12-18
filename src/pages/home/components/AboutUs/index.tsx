import { Container, ContainerBottom, ImgGrid, LineTitle, SubTitle, TextAbout, Title } from "./styles";
import ImgDiaristsGrid from "../../../../assets/background/grid-banner.png";

export function AboutUs(){
    return(
        <Container>
            <Title><LineTitle/>SOBRE NÓS<LineTitle/></Title>
            <SubTitle>
                RÁPIDO E EFICIENTE. <br/>
                SOMOS SUA NOVA 
                PLATAFORMA DE SERVIÇOS DE LIMPEZA.
            </SubTitle>
            <ContainerBottom>    
                <TextAbout>
                    A ArrumaQui é a solução ideal para suas necessidades de limpeza e organização. Conectamos pessoas que buscam serviços de diaristas com profissionais capacitados, garantindo qualidade, conveniência e alívio do estresse da manutenção. Junte-se a nós para facilitar sua vida e criar ambientes mais acolhedores, transformando a limpeza em tranquilidade.
                </TextAbout>
                <ImgGrid src={ImgDiaristsGrid}/>
            </ContainerBottom>
        </Container>
    )
}