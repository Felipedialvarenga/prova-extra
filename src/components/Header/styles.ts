import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #ffffff;
  box-shadow: 0px 10px 30px #0000001a;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 5vw;
`;

export const LogoBigText = styled.h1`
  letter-spacing: 0.96px;
  color: #313136;
  font-size: 32px;
`;

export const LogoShortText = styled.p`
  letter-spacing: 0.96px;
  color: #313136;
  font-size: 21px;
  margin-left: 5px;
`;

export const InputsDiv = styled.div`
  background-color: #f3f1fc;
  display: flex;
  align-items: center;
  border-radius: 18px;
  height: 40%;
  padding-left: 5px;
  font-size: 14px;
`;

export const LocationInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: #656469;
  margin-left: 0.5vw;
`;

export const DateInput = styled(LocationInput)`
  position: relative;
  padding-left: 20px;
  font-size: 14px;
  margin-left: 5px;

  &::-webkit-calendar-picker-indicator {
    left: -25px;
    position: absolute;
    font-size: 14px;
    opacity: 0.6
  }
`;

export const SearchIcon = styled(Search)`
  color: #7b89f4;
  background-color: #FFFFFF;
  padding: 3px;
  border-radius: 50%;
  margin-left: 3vw;
  margin-right: 6px;
  cursor: pointer;
`;

export const ButtonsDiv = styled.div`
margin-right: 5vw;
`;
