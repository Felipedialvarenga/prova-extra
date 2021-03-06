import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { RootState } from "@store/index";
import { ArrowButton, Header } from "@components/index";
import { iChosedPictureInfo } from "@shared/interfaces";

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
  BookButtonWrapper,
  PageBottomContent,
  CarouselButton,
  PicturesWrapper,
} from "./styles";
import PicturePreview from "./PicturePreview";
import { ArrowRight, ArrowLeft } from "@styled-icons/bootstrap";

const Details: React.FC = () => {
  const [chosedPictureIdx, setChosedPictureIdx] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const carsData = useSelector((state: RootState) => state.cars.cars);
  const chosedCar = carsData.filter((car) => car.model === params.carModel);

  const chosedPicture: iChosedPictureInfo = {
    picture: chosedCar[0].detailPictures[chosedPictureIdx].pic,
    color: chosedCar[0].detailPictures[chosedPictureIdx].color,
    picNumber: chosedPictureIdx,
  };

  const pictureClickHandler = (picIdx: number) => {
    setChosedPictureIdx(picIdx);
  };

  const leftButtonHandler = () => {
    if (chosedPictureIdx === 0) {
      setChosedPictureIdx(chosedCar[0].detailPictures.length - 1);
    } else {
      setChosedPictureIdx((prevIdx) => prevIdx - 1);
    }
  };

  const rightButtonHandler = () => {
    if (chosedPictureIdx === chosedCar[0].detailPictures.length - 1) {
      setChosedPictureIdx(0);
    } else {
      setChosedPictureIdx((prevIdx) => prevIdx + 1);
    }
  };

  const isChosen = (idx: number) => chosedPictureIdx === idx;

  const carouselOrder = () => {
    const carouselArray = [];

    if(chosedPictureIdx === 0){
      carouselArray.push(2);
    } else {
      carouselArray.push(chosedPictureIdx-1);
    }

    carouselArray.push(chosedPictureIdx);

    if(chosedPictureIdx === 2){
      carouselArray.push(0);
    } else {
      carouselArray.push(chosedPictureIdx+1);
    }

    return carouselArray;
  }

  const carouselIdx = carouselOrder();

  const arrowButtonHandler = () => {
    navigate("/");
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
              btClickHandler={arrowButtonHandler}
            >
              Back to Catalog
            </ArrowButton>
          </CatalogButtonWrapper>
          <CarPicture src={chosedPicture.picture} />
          <PictureInfo>
            <BoldText>{`0${chosedPicture.picNumber + 1}`}</BoldText>
            <CarColor>{chosedPicture.color}</CarColor>
          </PictureInfo>
        </PageMiddleContent>
        <BookButtonWrapper>
          <ArrowButton
            backgroundColor="#313136"
            textColor="#FFFFFF"
            direction="right"
            btClickHandler={() => alert("Booked !")}
          >
            Book now
          </ArrowButton>
        </BookButtonWrapper>
        <PageBottomContent>
          {chosedCar[0].detailPictures.length > 1 && (
            <CarouselButton onClick={leftButtonHandler}>
              <ArrowLeft size={15} />
            </CarouselButton>
          )}
          <PicturesWrapper>
            {chosedCar[0].detailPictures.map((picture, idx) => (
              chosedCar[0].detailPictures.length === 3 ? <PicturePreview
              key={picture.color+idx}
                src={chosedCar[0].detailPictures[carouselIdx[idx]].pic}
                picNumber={carouselIdx[idx]}
                pictureClickHandler={pictureClickHandler}
                isChosen={isChosen}
              /> :
              <PicturePreview
              key={picture.color+idx}
                src={picture.pic}
                picNumber={idx}
                pictureClickHandler={pictureClickHandler}
                isChosen={isChosen}
              />
            ))}
          </PicturesWrapper>
          {chosedCar[0].detailPictures.length > 1 && (
            <CarouselButton onClick={rightButtonHandler}>
              <ArrowRight size={15} />
            </CarouselButton>
          )}
        </PageBottomContent>
      </ContentContainer>
    </React.Fragment>
  );
};

export default Details;
