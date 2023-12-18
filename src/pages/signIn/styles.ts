import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 100vh;
    padding: 0 10%;
    display: flex;
    flex-direction: column;
`

export const Card = styled.div`
    width: 100%;
    height: 30rem;
    background-color: ${(props) => props.theme['white']};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 10px;
    margin: 30% auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.p`
    font-size: 2rem;
    font-weight: 500;
    margin: 1rem;
    align-self: flex-start;
    display: flex;
    align-items: start;
    gap: 5px;
    color: ${(props) => props.theme['gray-800']};

    span{
        font-size: 1.3rem;
    }
`

export const Input = styled.div`
    width: 83%;
    height: 3.3rem;
    border: 2px solid ${(props) => props.theme['gray-200']};
    border-radius: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    input{
        width: 90%;
        height: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 1.3rem;
        color: ${(props) => props.theme['gray-800']};
    }

    svg{
        color: ${(props) => props.theme['gray-800']};
    }
`

export const Button = styled.button`
    width: 90%;
    height: 3.5rem;
    background-color: ${(props) => props.theme['blue-200']};
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => props.theme['white']};
`