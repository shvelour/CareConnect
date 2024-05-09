import React from "react";
import styled from "styled-components";

const VerticalBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px; /* Ocupa toda a altura da página */
  background-color: #f2f2f2;
  width: 50%;
`;

const BannerText = styled.h1`
  font-size: 2rem;
`;

const Banner = () => {
  return (
    <VerticalBanner>
      <BannerText>Meu Banner Vertical</BannerText>
    </VerticalBanner>
  );
};

export default Banner;