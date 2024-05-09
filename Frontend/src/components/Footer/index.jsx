import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      This is a footer.
    </FooterContainer>
  );
};

export default Footer;
