import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.p`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme['blue-800']};
`

export const ContainerCard = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    gap: 1rem;

    @media (min-width: 700px){
        gap: 3rem;
    }
`

export const CardChoice = styled.div`
    width: 10rem;
    height: 25vh;
    background-color: ${(props) => props.theme['white']};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    @media (min-width: 700px){
        width: 15rem;
        height: 35vh;
    }
`

export const ContainerImg = styled.div`
    width: 100%;
    height: 75%;
    background-color: ${(props) => props.theme['blue-100']};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const ImageRole = styled.img`
    height: 85%;
`

export const TextChoice = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25%;
    margin: 0;
    color: ${(props) => props.theme['blue-800']};

    @media (min-width: 700px){
        font-size: 1.3rem;
    }
`