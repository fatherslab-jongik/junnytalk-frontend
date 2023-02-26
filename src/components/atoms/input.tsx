import styled from 'styled-components'

interface Props{
    className: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>string 
    value: string

}


const Input = ({className, onChange, value}:Props) => {
    return <StyledInput type='text' value={value} className={className} onChange={onChange}  />
}


const StyledInput = styled.input`

    color: blue;

    &.small {
        width: 20px;
    }
    &.normal {
        width: 40px;
    }
    &.big {
        width: 60px;
    }
`


export default Input
