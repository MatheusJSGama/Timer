import styled from 'styled-components'

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 160%;
    color : ${props => props.theme['gray-100']};
    

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }

`

export const BaseCountdownButon = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    
    border: 0;
    border-radius: 8px;
    cursor: pointer;
    color : ${props => props.theme['gray-100']};

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    
`

export const StartCountdownButton = styled(BaseCountdownButon)`
    background-color: ${props => props.theme['green-500']};
    &:not(:disabled):hover{
        background-color: ${props => props.theme['green-700']};
        transition: 0.3s;
    }
`

export const StopCountDownButton = styled(BaseCountdownButon)`
    background-color: ${props => props.theme['red-500']};
    &:not(:disabled):hover{
        background-color: ${props => props.theme['red-700']};
        transition: 0.3s;
    }
`
