import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StyledButtonGroup = styled.div`
    display: flex;
    border-bottom: 2px solid var(--blue);

    ${Button} {
        border-radius: 0;
    }
`;

export default function ButtonGroup({buttons, changePage}) {
    const [clickedId, setClickedId] = useState(0);
    const handleClick = (id)=> {
        setClickedId(id);
        changePage(id);
    }

    return (
        <StyledButtonGroup>
            {buttons.map((label, i)=> (
                <Button 
                    key={i} 
                    color={i === clickedId ? 'blue' : 'transparent'}
                    size='medium'
                    onClick={()=>handleClick(i)}
                    >{label}</Button>
            ))}
        </StyledButtonGroup>
    )
}