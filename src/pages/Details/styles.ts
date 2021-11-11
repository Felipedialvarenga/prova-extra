import styled from "styled-components";

export const ContentContainer = styled.div`
  margin: 1vh 5vw;
`;

export const PageTopContent = styled.div`
  display: flex;
`;

export const BrandLogo = styled.img`
  max-width: 200px;
`;

export const TextWrapper = styled.div`
  margin-left: 3vw;
`;

export const BoldText = styled.h2`
  font: normal normal bold 50px/67px Segoe UI;
  color: #313136;
  margin: 0;
`;

export const NormalText = styled.p`
  font: normal normal 300 40px/53px Segoe UI;
  color: #313136;
  margin: 0;
`;

export const PageMiddleContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CatalogButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CarPicture = styled.img`
  width: 40vw;
`;
export const PictureInfo = styled.div`
  margin-right: 3vw;
`;

export const CarColor = styled(NormalText)`
  text-transform: capitalize;
`;

export const BookButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageBottomContent = styled.div`
margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PicturesWrapper = styled.div`
display: flex;
justify-content: space-around;
`;

export const CarouselButton = styled.button`
 color: #FFFFFF;
 border-radius: 50%;
 background-color: #313136;
 padding: 15px;
 margin-right: 25px;
 border: none;
 cursor: pointer;
`;
