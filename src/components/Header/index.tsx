import { useNavigate } from "react-router-dom";

import { Container, Logo, Nav } from "./styles";
import LogoArrumaqui from "../../assets/logos/logo-arrumaqui.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";


export function Header(){
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);

    return(
        <Container isOpen={openMenu}>
            <Logo src={LogoArrumaqui} alt="Logo da ArrumAqui. Desenho de uma casa com alguns produtos de limpeza dentro, ao lado da casa a escrita 'ArrumaQui"/>

            <IoMenu size={26} onClick={() => setOpenMenu(true)}/>
            <Nav isOpen={openMenu}>
                <IoClose size={24} onClick={() => setOpenMenu(false)}/>
                <li onClick={() => navigate('/escolha-de-funcao/login')}>Login</li>
                <li  onClick={() => navigate('/escolha-de-funcao/cadastro')}>Cadastro</li>
            </Nav>
        </Container>
    )
}