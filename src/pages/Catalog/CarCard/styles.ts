import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8fa;
  border-radius: 20px;
  height: 210px;
  width: 270px;
  padding: 15px;
  margin: 2vh 2.5vw;
`;

export const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CarBrand = styled.p`
  font: normal normal bold 17px/22px Segoe UI;
  color: #313136;
  margin: 0;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21px;
`;

export const GreyDot = styled.div`
  height: 6px;
  width: 6px;
  background-color: #c8c8ca;
  border-radius: 50%;
`;

export const CarModel = styled.p`
  font: normal normal 300 17px/22px Segoe UI;
  color: #313136;
  margin: 0;
  width: 100%;
`;

export const CarImg = styled.img`
  width: 230px;
  margin-top: 25px;
  filter: drop-shadow(0 5px 2px #343635);
`;

export const CarPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;


export const PriceText = styled.p`
  font: normal normal bold 24px/32px Segoe UI;
  position: relative;
  color: #313136;

  &::before {
    content: "$";
    position: absolute;
    top: 0;
    left: -10px;
    font: normal normal bold 14px/19px Segoe UI;
    color: #313136;
  }

  &::after {
    content: "/day";
    font: normal normal 400 14px/19px Segoe UI;
    color: #313136;
  }
`;