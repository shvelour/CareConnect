import React from "react";
import styled from "styled-components";
import { FaBrazilianRealSign } from "react-icons/fa6";
import Separator from "../Separator";

const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
`;

const BannerText = styled.h1`
  color: #803d3b;
  font-size: 40px;
`;
const Donations = styled.div`
  width: 100%;
  height: 100px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerText> Doe agora </BannerText>
        <Donations>
          <FaBrazilianRealSign />
          <BannerText>15,00</BannerText>
          <FaBrazilianRealSign />
          <BannerText>30,00</BannerText>
          <FaBrazilianRealSign />
          <BannerText>50,00</BannerText>
          <BannerText>Outro valor</BannerText>
        </Donations>
      </BannerContainer>
      <Separator/>
    </>
  );
};

export default Banner;
