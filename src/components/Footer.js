import React from 'react';
import styled from 'styled-components';

const StytledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  z-index: 1;
  padding: 20px 0;
  font-size: 0.8em;
  color: #ffffff;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: #ffffff;

  :hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <StytledFooter>
    <span>© {new Date().getFullYear()} Ryan Cunningham Hair</span>
    <Divider>|</Divider>
    <span>
      webdev:{' '}
      <ExternalLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://olegchursin.com"
      >
        oleg chursin
      </ExternalLink>
    </span>
  </StytledFooter>
);

export default Footer;
