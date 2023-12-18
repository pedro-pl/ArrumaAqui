import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button, Card, Container, Input, Title } from "./styles";

import { IoMailOutline } from "react-icons/io5";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";

export function SignIn(){
    const { role } = useParams();

    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <Container>
            <Header/>
            <Card>
                <Title>Olá, {role}<span>👋</span></Title>

                <Input>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <IoMailOutline size={22} />
                </Input>

                <Input>
                    <input type={isVisible ? "text" : "password"} placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    {
                        isVisible ? 
                        <IoEyeOffOutline size={22} onClick={() => setIsVisible(false)}/> :
                        <IoEyeOutline size={22} onClick={() => setIsVisible(true)} /> 
                    }
                </Input>

                <Button>Entrar</Button>
            </Card>
        </Container>
    )
}