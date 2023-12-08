import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all.3s;

    @media (min-width: 1000px){
        transition: all.3s;
        height: 40vh;
    }

    @media (min-width: 1400px){
        transition: all.3s;
        height: 70vh;
    }
`

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-800']};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all.3s;

    span{
        color: ${(props) => props.theme['blue-200']};
    }

    @media (min-width: 450px){
        transition: all.3s;
        width: 30rem;
    }
    
    @media (min-width: 750px){
        transition: all.3s;
        transition: all.3s;
        font-size: 2rem;
    }

    @media (min-width: 1000px){
        transition: all.3s;
        width: 42rem;
        transition: all.3s;
        font-size: 3rem;
    }

    @media (min-width: 1500px){
        transition: all.3s;
        width: 45rem;
        transition: all.3s;
        font-size: 4rem;
    }
`

export const PersonsImg = styled.img`
    width: 25%;
    display: none;
    transition: all.3s;

    @media (min-width: 700px){
        display: block;
    }

    @media (min-width: 1800px){
        transition: all.3s;
        width: 30%;
    }
`