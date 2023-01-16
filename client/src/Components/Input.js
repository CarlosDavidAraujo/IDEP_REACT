import styled from "styled-components";
import { forwardRef } from "react";

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
        font-size: 14px;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    padding-left: 10px;
    outline: none;
    border: 2px solid var(--blue);
    border-radius: 2px;
    background-color: var(--bright-gray);
    height: ${({ size }) => {
        switch (size) {
            case 'large':
                return '50px';
            default:
                return '35px'
        }
    }};
`;


const Input = forwardRef(({ type, name, label, required, placeholder, size, onChange }, ref) => {
    return (
        <StyledDiv>
            <label for={name}>{label}</label>
            <StyledInput 
                ref={ref}
                size={size}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
            />
        </StyledDiv>
    )
});

export default Input