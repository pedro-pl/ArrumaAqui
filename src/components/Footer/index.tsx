import { Container, ContainerInformation, ContainerText, ContainerTop, ImageLogo, Text, TextCopy } from "./styles";

import ImageArrumaqui from "../../assets/logos/logo-footer.png";

import { IoMailOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

export function Footer(){
    return(
        <Container>
            <ContainerTop>
                <ImageLogo src={ImageArrumaqui}/>
                <ContainerInformation>
                    <Text><FaLocationDot size={22}/> Rua:  Haddock Lobo, 595, São Paulo - Brasil</Text>
                    <ContainerText>
                        <Text><FaPhoneAlt size={22}/> 5893-3241</Text>
                        <Text><ImWhatsapp size={22}/> (11) 91274-2134</Text>
                    </ContainerText>
                    <Text><IoMailOutline size={22}/> info_arrumaQui@outlook.com</Text>
                </ContainerInformation>
            </ContainerTop>
            <TextCopy>Copyright © 2023 • ArrumaQui</TextCopy>
        </Container>
    )
}