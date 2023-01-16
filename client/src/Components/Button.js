import styled, { css } from "styled-components";

const colors = {
    yellow: "var(--yellow)",
    blue: "var(--blue)",
    white: "var(--white)",
    red: "var(--red)",
    gray: "var(--bright-gray)",
    transparent: "transparent"
}
const sizes = {
    medium: '150px',
    large: '300px'
}

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    max-height: 35px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    background-color: ${({ color })=> colors[color]?? 'none'};
    width: ${({ size }) => sizes[size]?? 'fit-content'};

    ${({ outline, color }) => outline &&
        css`
        background-color: transparent;
        border: 2px solid var(--${color});
        color: var(--${color});
        &:hover {
            background-color: var(--${color});
            color: black;
        }
    `}
`;