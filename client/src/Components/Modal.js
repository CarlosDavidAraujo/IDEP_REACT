import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";
import useOutSideClick from "../CustomHooks/useOutSideClick";

const modalAnimation = keyframes`    
    from {
        bottom: 100vh;
        left: 50vw;
        transform: translateX(-50%);
    } 
    to {
        top: 50vh;
        left:50vw;
        transform: translate(-50%,-50%);
    }
`;

const StyledModal = styled.div`
    position: fixed;
    display: ${({ active }) => active ? 'flex' : 'none'};
    flex-direction: column;
    gap: 20px;
    width: min(85%, 1240px);
    background-color: var(--white);
    padding: 40px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    pointer-events: auto;
    animation: ${modalAnimation} .5s 0s forwards;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 40px;
    width: 36px;
    height: 36px;
    font-size: 24px;
    color: gray;
    cursor: pointer;
    border: none;
    background-color: transparent;
`;

export default function Modal({ active, close, onClickOut, children }) {
    const modalRef = useRef();
    useOutSideClick(modalRef, onClickOut);

    //desativa eventos de click fora do modal quando ele estiver aberto
    useEffect(() => {
        if (active) {
            document.body.style.pointerEvents = 'none';
        }
        else {
            document.body.style.pointerEvents = 'auto';
        }
    }, [active])

    return (
        <StyledModal ref={modalRef} active={active}>
             <CloseButton onClick={close}><i class="fa-solid fa-xmark"></i></CloseButton>
             {children}
        </StyledModal>
    )
}

