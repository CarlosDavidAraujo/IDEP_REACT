import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    label {
        font-size: 14px;
        font-weight: 400;
    }
`;

const StyledSelect = styled.select`
    height: 35px;
    outline: none;
    border: 2px solid var(--blue);
    border-radius: 2px;
    color: var(--blue);
    font-size: 14px;
    font-weight: 500;
    option {
        border-bottom: 1px solid var(--blue);
    }
`;

export default function Select({ label, name, options, onChange }) {
    return (
        <Wrapper>
            <label for={name}>{label}</label >
            <StyledSelect id={name} name={name} onChange={onChange}>
                {options.map((option, i) =>
                    <option
                        key={i}
                        value={option.value}
                        selected={option.selected}
                        disabled={option.disabled}
                    >
                        {option.label}</option>
                )}
            </StyledSelect>
        </Wrapper>
    )
}