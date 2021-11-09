import React, { useEffect } from "react";
import { Header } from "../../components";
import CarCard from "./CarCard";
import { ContentWrapper } from "./styles";

const Catalog: React.FC = () => {
  
  const loadCarsData = async () => {
    const response = await fetch('cars.json');
    const data = await response.json();

    if(response.ok){
        console.log(data);
    }
  };

 useEffect(() => {
    loadCarsData();
 });

  return (
    <React.Fragment>
      <Header />
      <ContentWrapper>
        <CarCard
          brand="Ferrari"
          model="CALIFORNIA"
          price={725}
          picture="https://www.stuttgartporsche.com.br/images/db/modelo/911-GT3-RS.png"
        />
        <CarCard
          brand="Ferrari"
          model="CALIFORNIA"
          price={725}
          picture="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:699a6983-35c7-4662-bc81-5c626742102d;revision=0?component_id=a306573a-1bce-448f-a6a6-923b1affe4cf&api_key=CometServer1&access_token=1636503313_urn%3Aaaid%3Asc%3AUS%3A699a6983-35c7-4662-bc81-5c626742102d%3Bpublic_98c940c89ff814e59be6726a607784ffbf08e3df"
        />
        <CarCard
          brand="Ferrari"
          model="CALIFORNIA"
          price={725}
          picture="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:699a6983-35c7-4662-bc81-5c626742102d;revision=0?component_id=a306573a-1bce-448f-a6a6-923b1affe4cf&api_key=CometServer1&access_token=1636503313_urn%3Aaaid%3Asc%3AUS%3A699a6983-35c7-4662-bc81-5c626742102d%3Bpublic_98c940c89ff814e59be6726a607784ffbf08e3df"
        />
        <CarCard
          brand="Ferrari"
          model="CALIFORNIA"
          price={725}
          picture="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:699a6983-35c7-4662-bc81-5c626742102d;revision=0?component_id=a306573a-1bce-448f-a6a6-923b1affe4cf&api_key=CometServer1&access_token=1636503313_urn%3Aaaid%3Asc%3AUS%3A699a6983-35c7-4662-bc81-5c626742102d%3Bpublic_98c940c89ff814e59be6726a607784ffbf08e3df"
        />
        <CarCard
          brand="Ferrari"
          model="CALIFORNIA"
          price={725}
          picture="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:699a6983-35c7-4662-bc81-5c626742102d;revision=0?component_id=a306573a-1bce-448f-a6a6-923b1affe4cf&api_key=CometServer1&access_token=1636503313_urn%3Aaaid%3Asc%3AUS%3A699a6983-35c7-4662-bc81-5c626742102d%3Bpublic_98c940c89ff814e59be6726a607784ffbf08e3df"
        />
      </ContentWrapper>
    </React.Fragment>
  );
};

export default Catalog;
