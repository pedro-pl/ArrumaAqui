import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AboutUs } from "./components/AboutUs";
import { OurServices } from "./components/OurServices";
import { Presentation } from "./components/Presentation";
import { Container } from "./styles";

export function Home(){
    return(
        <>
            <Container>
                <Header />
                <Presentation/>
                <AboutUs/>
                <OurServices/>
            </Container>
            <Footer/>
        </>
    )
}