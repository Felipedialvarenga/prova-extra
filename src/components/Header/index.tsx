import React from "react";
import { HeaderContainer, InputsDiv, LocationInput, Logo, LogoBigText, LogoShortText, DateInput, SearchIcon } from "./styles";
import { LocationPin } from "@styled-icons/entypo";

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo>
                <LogoBigText>EXOTIC</LogoBigText>
                <LogoShortText>CARS</LogoShortText>
            </Logo>
            <InputsDiv>
                <LocationPin color="#C4C4C4" size="20"/>
                <LocationInput placeholder="Location"/>
                <DateInput type="date"/>
                <DateInput type="date" />
                <SearchIcon size="20"/>
            </InputsDiv>
            
        </HeaderContainer>
    )
}

export default Header;