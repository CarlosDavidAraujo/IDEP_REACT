import { motion } from "framer-motion";
import { Children, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledSlider = styled(motion.div)`
    overflow: hidden;
    display: flex;
    justify-content: center;
    height: 100%;
`;

const Inner = styled(motion.div)`
    display: flex;
    justify-content: center;
    gap: 10px;
    cursor: grab;
`;

export default function Slider({children}) {
    const sliderRef = useRef();
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        setWidth(sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth);
    }, [sliderRef, width])

    return (
        <StyledSlider ref={sliderRef}>
            <Inner drag='x' dragConstraints={{right: 500, left: -width}}>
                {children}
            </Inner>
        </StyledSlider>
    )
}