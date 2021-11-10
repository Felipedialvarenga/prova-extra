import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router";
import { ArrowButton, Header } from "../../components";
import {
  BrandLogo,
  PageTopContent,
  BoldText,
  NormalText,
  ContentContainer,
  TextWrapper,
  PageMiddleContent,
  CarPicture,
  PictureInfo,
  CarColor,
  CatalogButtonWrapper,
  BookButtonWrapper
} from "./styles";
import { iChosedPictureInfo } from "../../shared/interfaces";

const Details: React.FC = () => {
  const params = useParams();
  const carsData = useSelector((state: RootState) => state.cars.cars);
  const chosedCar = carsData.filter((car) => car.model === params.carModel);
  console.log(chosedCar);

  const chosedPicture: iChosedPictureInfo = {
    picture: chosedCar[0].detailPictures[0].pic,
    color: chosedCar[0].detailPictures[0].color,
    picNumber: `01`,
  };

  return (
    <React.Fragment>
      <Header />
      <ContentContainer>
        <PageTopContent>
          <BrandLogo src={chosedCar[0].logo} />
          <TextWrapper>
            <BoldText>{chosedCar[0].brand + " " + chosedCar[0].model}</BoldText>
            <NormalText>{`$${chosedCar[0].price}/day`}</NormalText>
          </TextWrapper>
        </PageTopContent>
        <PageMiddleContent>
          <CatalogButtonWrapper>
            <ArrowButton
              backgroundColor="transparent"
              textColor="#313136"
              direction="left"
            >
              Back to Catalog
            </ArrowButton>
          </CatalogButtonWrapper>
          <CarPicture src={chosedPicture.picture} />
          <PictureInfo>
            <BoldText>{chosedPicture.picNumber}</BoldText>
            <CarColor>{chosedPicture.color}</CarColor>
          </PictureInfo>
        </PageMiddleContent>
        <BookButtonWrapper>
          <ArrowButton
            backgroundColor="#313136"
            textColor="#FFFFFF"
            direction="right"
          >
            Book now
          </ArrowButton>
        </BookButtonWrapper>
      </ContentContainer>
    </React.Fragment>
  );
};

export default Details;
