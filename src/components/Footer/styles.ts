import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 25rem;
    padding: 0 10%;
    background-color: ${(props) => props.theme['blue-800']};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 3rem;
`

export const ContainerTop = styled.div`
    width: 100%;
    height: 100%;
    border-bottom: 2px solid ${(props) => props.theme['gray-300']};
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 900px){
        flex-direction: row;
        justify-content: space-around;
        border-top: 2px solid ${(props) => props.theme['gray-300']};
        padding: 0;
        margin-top: 2rem;
        height: 60%;
    }
`

export const ImageLogo = styled.img`
    width: 20rem;
    margin: 2rem 0;
`

export const ContainerInformation = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 900px){
        width: 23rem;
        align-items: flex-start;
    }
`

export const ContainerText = styled.div`
    width: 18rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 900px){
        width: 23rem;
    }
`

export const Text = styled.p`
    height: auto;
    font-size: 0.8rem;
    color: ${(props) => props.theme['white']};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    gap: 5px;

    svg{
        color: ${(props) => props.theme['white']};
    }

    @media (min-width: 900px){
        font-size: 1rem;
    }
`

export const TextCopy = styled.p`
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-300']};
    margin: 2rem 0;

    @media (min-width: 900px){
        margin: 0;
    }
`