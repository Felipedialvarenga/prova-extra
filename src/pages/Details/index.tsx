import React from "react";
import { useParams } from "react-router";
import { Header } from "../../components";


const Details: React.FC = () => {
    const params = useParams();

    console.log(params.carModel);
    
    return (
        <React.Fragment>
            <Header/>
        </React.Fragment>
    )
}

export default Details;