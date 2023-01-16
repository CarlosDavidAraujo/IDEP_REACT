import styled from "styled-components";

const StyledProgressBar = styled.div`
    background-color: var(--bright-gray);
    width: 100%;
    height: 15px;
    border-radius: 10px;
`;

const Progress = styled.div`
    background-color: var(--blue);
    border-radius: 10px;
    width: 30%;
    height: 100%;
    &::after {
        position: absolute;
        left: 30%;
        transform: translateX(50%);
        content: "";
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: var(--yellow);
    }
`;

export default function ProgressBar() {
    return (
            <StyledProgressBar>
                <Progress />
            </StyledProgressBar>
    )
}