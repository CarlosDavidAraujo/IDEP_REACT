import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    label {
        font-size: 14px;
    }
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    padding-left: 10px;
    outline: none;
    border: 2px solid var(--blue);
    border-radius: 2px;
    background-color: var(--bright-gray);
`;


export default function TextArea({name, label, required, onChange}) {
    return (
        <StyledDiv>
            <label for={name}>{label}</label>
            <StyledTextArea name={name} id={name} required={required} onChange={onChange}/>
        </StyledDiv>
    )
}