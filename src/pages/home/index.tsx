import { Header } from "../../components/Header";
import { Presentation } from "./components/Presentation";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header />
            <Presentation/>
        </Container>
    )
}