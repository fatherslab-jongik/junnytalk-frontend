import styled from 'styled-components'

interface IProps {
    text: string
    styleClass: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

const Button = ({ text, styleClass, onClick }: IProps) => {
    return <StyledButton type="button" onClick={onClick} className={styleClass} >{text}</StyledButton>
}

const StyledButton = styled.button`
    color: black;

    &.small {
        width:20px;
    }
    &.normal {
        width:50px;
    }
    &.big {
        width:60px;
    }
`

export default Button