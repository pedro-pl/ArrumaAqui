import { Container, PersonsImg, Text } from "./styles";
import DiaristImg from "../../../../assets/pessoas/diarists.png"

export function Presentation(){
    return(
        <Container>
            <Text>
                Encontre os melhores 
                profissionais para serviços 
                <span> Domésticos</span>
            </Text>
            <PersonsImg src={DiaristImg} alt="Desenho de dois diaristas segurando materiais de limpeza, ao lado esquerdo um rapaz, e ao lado direito uma moça."/>
        </Container>
    )
}