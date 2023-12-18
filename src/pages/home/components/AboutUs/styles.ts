import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    width: 4rem;
    height: 2px;
    background-color: ${(props) => props.theme['blue-200']};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all.3s;

    @media (min-width: 750px){
        transition: all.3s;
        width: 8rem;
    }
`

export const SubTitle = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

export const ContainerBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`

export const TextAbout = styled.p`
    font-size: 1rem;
    font-weight: 400;
    transition: all.3s;

    @media (min-width: 750px){
        transition: all.3s;
        font-size: 1.1rem;
    }

    @media (min-width: 1000px){
        transition: all.3s;
        width: 45rem;
        transition: all.3s;
        font-size: 1.5rem;
    }

    @media (min-width: 1500px){
        transition: all.3s;
        width: 45rem;
        transition: all.3s;
        align-self: flex-start;
    }
`

export const ImgGrid = styled.img`
    height: 10rem;
    display: none;

    @media(min-width: 700px){
        display: block;
    }

    @media(min-width: 1000px){
        height: 15rem;
        align-self: flex-start;
        margin-top: 2rem;
    }

    @media(min-width: 1500px){
        height: 25rem;
    }
`