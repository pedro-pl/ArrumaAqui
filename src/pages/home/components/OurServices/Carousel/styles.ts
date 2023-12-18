import styled from "styled-components";

export const CarouselContainer = styled.div`
    position: relative;
    width: 18rem;
    overflow: hidden;
    margin-top: 4rem;

    @media (min-width: 1000px){
        display: none;
    }
    
    @media (min-width: 800px){
        width: 50%;
    }
`;

export const SlideContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease;
`;

export const Slide = styled.div`
    flex: 0 0 100%;
`;

export const SlideImage = styled.img`
    width: 100%;
    height: auto;
`;

export const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
`;

export const PrevButton = styled(Button)`
    left: 0;
`;

export const NextButton = styled(Button)`
    right: 0;
`;

export const Card = styled.div`
    height: 22rem;
    border: 2px solid ${(props) => props.theme['gray-200']};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg{
        color: ${(props) => props.theme['blue-200']};
        margin: 1.5rem 0;
    }
`

export const ImageService = styled.img`
    width: 20%;
    margin: 2rem 0;
`

export const TitleService = styled.p`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin: 1rem 0 1.5rem 0;
    text-align: center;
    color: ${(props) => props.theme['blue-100']};
`

export const TextService = styled.p`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    text-align: justify;
    width: 75%;
    margin: 0 0 0 0;
    height: 11rem;
    color: ${(props) => props.theme['gray-900']};
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme['blue-100']};
        border-radius:10px;
    }
`