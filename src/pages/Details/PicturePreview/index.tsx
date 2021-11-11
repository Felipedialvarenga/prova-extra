import React from "react";
import { Container, CarPicture } from "./styles";
import { iPicturePreviewProps } from "../../../shared/interfaces";

const PicturePreview: React.FC<iPicturePreviewProps> = (props) => {
    return (
        <Container>
            <CarPicture src={props.src} />
        </Container>
    )
}

export default PicturePreview;