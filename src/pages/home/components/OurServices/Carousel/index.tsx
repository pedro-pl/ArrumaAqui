import { Card, CarouselContainer, ImageService, NextButton, PrevButton, Slide, SlideContainer, TextService, TitleService } from "./styles";

import { servicos } from "../../../../../mocks/listaServicos";

import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

export function Carousel(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        const index = (currentIndex - 1 + servicos.length) % servicos.length;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const index = (currentIndex + 1) % servicos.length;
        setCurrentIndex(index);
    };

    return(
        <CarouselContainer>
            <SlideContainer
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {servicos.map((servico) => (
                <Slide key={servico.id}>
                    <Card>
                        <ImageService src={servico.image}/>
                        <TitleService>{servico.titulo}</TitleService>
                        <TextService>{servico.descricao}</TextService>
                    </Card>
                </Slide>
                ))}
            </SlideContainer>
            <PrevButton onClick={goToPrevSlide}><GrPrevious/></PrevButton>
            <NextButton onClick={goToNextSlide}><GrNext/></NextButton>
        </CarouselContainer>
    )
}