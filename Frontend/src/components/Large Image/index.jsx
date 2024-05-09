import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;


const ImageLarge = ({ src, alt }) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} />
    </ImageContainer>
  );
};

export default ImageLarge;