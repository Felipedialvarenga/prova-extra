import React, { useEffect} from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState, saveCarsData } from "../../store";
import { Header } from "../../components";
import CarCard from "./CarCard";
import { ContentWrapper} from "./styles";

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carsData = useSelector((state: RootState) => state.cars.cars)

  useEffect(() => {
    fetch("cars.json")
      .then(response => response.json())
      .then(data => dispatch(saveCarsData(data.cars)))
  },[dispatch]);

  const carClickHandler = (carModel: string) => {
    navigate(`/details/${carModel}`);
  }

  return (
    <React.Fragment>
      <Header />
      <ContentWrapper>
        {carsData.map((car,idx) => (
          <CarCard
            key={car.model+idx}
            brand={car.brand}
            model={car.model}
            price={car.price}
            picture={car.catalogPicture}
            carClickHandler={carClickHandler}
          />
        ))}
      </ContentWrapper>
    </React.Fragment>
  );
};

export default Catalog;
