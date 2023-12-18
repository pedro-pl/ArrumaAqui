import styled from "styled-components";

interface isOpenProps {
    isOpen: boolean
}

export const Container = styled.header<isOpenProps>`
    width: 100%;
    height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg{
        display: none;
    }

    @media (max-width: 750px){
        height: 8vh;

        svg {
            width: 28px;
            height: 28px;
        }
    }

    @media (max-width: 901px) {
        transition: all.3s;

        svg{
            display: ${(props) => props.isOpen ? "none" : "block"};
            right: 0;
            cursor: pointer;
        }
    }
`

export const Logo = styled.img`
    height: 100%;
`

export const Nav = styled.nav<isOpenProps>`
    width: 8rem;
    height: 10vh;
    background-color: ${(props) => props.theme['white']};
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    top: 10px;
    row-gap: 1rem;
    right: ${(props) => props.isOpen ? "10px" : "-10rem"};
    padding: 10px;
    transition: all.3s;
    border-radius: 5px;
    box-shadow: 0 3px 6px #00000029, 0 1px 2px #0000003b;
    transition: all.2s;

    li{
        list-style: none;
        background-color: transparent;
        border: none;
        width: auto;
        height: auto;
        font-size: 1rem;
        font-weight: 600;
    }

    svg{
            align-self: flex-start;
            position: absolute;
            top: 5px;
            left: 5px;
            cursor: pointer;
            display: block;
        }

    @media (min-width: 901px) {
        width: 18rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        position: relative;
        box-shadow: none;
        background-color: transparent;
        right: 0;
        transition: all.2s;

        li{
            border: 2px solid ${(props) => props.theme['blue-200']};
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            font-weight: 600;
            color: ${(props) => props.theme['gray-800']};
            border-radius: 10px;
            cursor: pointer;
            transition: all.3s;

            &:hover{
                background-color: ${(props) => props.theme['blue-600']};
                color: ${(props) => props.theme['white']};
                border-color: ${(props) => props.theme['blue-600']};
                transition: all.3s;
            }
        }

        :last-child{
            background-color: ${(props) => props.theme['blue-200']};
            color: ${(props) => props.theme['white']};
        }
    }
    
    @media (min-width: 901px) {
        transition: all.3s;

        li{
            width: 8rem;
            height: 2.5rem;
        }
    }
`