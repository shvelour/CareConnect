import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Slide = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  color: #333;
  font-size: 24px;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;



const RightArrow = styled(Arrow)`
  right: 10px;
`;

const Carousel = () => {

 
    const images = [
      'ajuda.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
    ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow>&rarr;</RightArrow>, 
    prevArrow: <Arrow>&larr;</Arrow>, 
  };

  return (
    <Slider {...settings}>
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
      <Slide>Slide 3</Slide>
    </Slider>
  );
};

export default Carousel;
