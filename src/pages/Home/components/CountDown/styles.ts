import styled from 'styled-components'

export const CountdownContainer = styled.div`
    width: 100%;
    font-family: 'Roboto Mono', monospace;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10rem;
    line-height: 8rem;

    span{
        padding: 2rem 1rem;
        background-color: ${props => props.theme['gray-700']};
        border-radius: 8px;
    }

`
export const Separetor = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme['green-500']};


    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    
`
