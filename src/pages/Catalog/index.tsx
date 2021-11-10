import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, saveCarsData } from "../../store";
import { Header } from "../../components";
import CarCard from "./CarCard";
import { ContentWrapper } from "./styles";

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const carsData = useSelector((state: RootState) => state.cars.cars)

  // const loadCarsData = async () => {
  //   const response = await fetch("cars.json");
  //   const data = await response.json();

  //   if (response.ok) {
  //     dispatch(saveCarsData(data.cars));
  //   }
  // };

  useEffect(() => {
    fetch("cars.json")
      .then(response => response.json())
      .then(data => dispatch(saveCarsData(data.cars)))
  },[dispatch]);

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
          />
        ))}
      </ContentWrapper>
    </React.Fragment>
  );
};

export default Catalog;
