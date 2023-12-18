import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`

export const Title = styled.p`
    height: 3rem;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
    color: ${(props) => props.theme['blue-200']};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all.3s;

    @media (min-width: 750px){
        transition: all.3s;
        font-size: 1.5rem;
        gap: 2rem;
        margin: 2rem 0;
    }
`

export const LineTitle = styled.div`
    width: 2rem;
    height: 2px;
    background-color: ${(props) => props.theme['blue-200']};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all.3s;

    @media (min-width: 750px){
        transition: all.3s;
        width: 6rem;
    }
`

export const SubTitle = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    transition: all.3s;

    @media (min-width: 750px){
        transition: all.3s;
        font-size: 1.5rem;
    }

    @media (min-width: 1000px){
        transition: all.3s;
        transition: all.3s;
        font-size: 2rem;
    }
`

export const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;

    @media (max-width: 1000px){
        display: none;
    }

    @media (min-width: 1800px){
        width: 90%;
    }
`

export const Card = styled.div`
    height: 22rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media (min-width: 1000px){
        width: 24%;
        
    }
    
    @media (min-width: 1400px){
        width: 17rem;
    }
    
    @media (min-width: 1800px){
        width: 20rem;
        height: 25rem;
    }
`

export const CircleIcon = styled.div`
    width: 6.5rem;
    height: 6.5rem;
    border: 2px solid transparent;
    border-radius: 50%;
    margin-top: calc(0px - 3rem - 6px);
    background-color: ${(props) => props.theme['white']};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 999;
`

export const ImageService = styled.img`
    width: 45%;
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
    width: 80%;
    margin: 0 0 0 0;
    height: 12rem;
    color: ${(props) => props.theme['gray-900']};
    overflow: hidden;
    overflow-y: scroll;
    padding-right: 5px;

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