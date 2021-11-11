import styled from "styled-components";

export const Container = styled.div<{chosed: boolean, onClick: (picNumber:number) => void}>`
width: 200px;
background-color: #C4C4C4;
border-radius: 8px;
margin-right: 100px;
cursor: pointer;
transform: ${props => props.chosed ? 'translateY(-20px)' : 'translateY(0)'};
transition: transform .4s linear;
`;

export const CarPicture = styled.img`
  width: 300px;
`;
