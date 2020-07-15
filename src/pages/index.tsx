import ArtDirectedFullBackground from '../components/ArtDirectedFullBackground';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { StyledContentCenterWrapper } from '../components/SharedStyledComponents';
import React from 'react';
import styled from 'styled-components';

const CTA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 330px;
  padding: 8px;
  background-color: #ffffff;
  color: #010e1e;
  font-size: 1.2em;
  text-transform: uppercase;
  text-decoration: none;

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const StyledCenterWrapper = styled(StyledContentCenterWrapper)`
  max-width: 960px;
`;

const ArtDirectedImages: React.FC = () => (
  <Layout>
    <SEO title="Ryan Cunningham Hair" />
    <ArtDirectedFullBackground>
      <StyledCenterWrapper>
        <CTA
          target="_top"
          href="https://square.site/book/VWSX0TZN1XQ9N/ryan-cunningham-hair"
        >
          Book An Appointment
        </CTA>
      </StyledCenterWrapper>
    </ArtDirectedFullBackground>
  </Layout>
);

export default ArtDirectedImages;
