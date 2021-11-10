import React from "react";
import {ButtonContainer, StyledArrowLeft, StyledArrowRight} from './styles'

export const ArrowButton: React.FC<{textColor: string; backgroundColor: string; direction: string}> = (props) => {
    return (
        <ButtonContainer backgroundColor={props.backgroundColor} textColor={props.textColor}>
            {props.direction === "left" && <StyledArrowLeft size={20} />}
            {props.children}
            {props.direction === "right" && <StyledArrowRight size={20} />}
        </ButtonContainer>
    )
}
