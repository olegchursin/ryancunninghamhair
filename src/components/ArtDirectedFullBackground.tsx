import { StyledFullScreenWrapper } from './SharedStyledComponents';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';

const ArtDirectedFullBackground = ({ className, children }) => {
  const { desktop, medium, small } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "ryan-cunningham-hair.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        medium: file(relativePath: { eq: "ryan-cunningham-hair.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        small: file(relativePath: { eq: "ryan-cunningham-hair-v.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 690, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Art-Direction Array
  const backgroundArtDirectionStack = [
    small.childImageSharp.fluid,
    {
      ...medium.childImageSharp.fluid,
      media: `(min-width: 691px)`
    },
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1401px)`
    }
  ];

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundArtDirectionStack}
        backgroundColor={`#040e18`}
        id="ryan-cunningham-hair"
        role="img"
        aria-label="Ryan Cunningham Hair"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledFullScreenWrapper>
  );
};

const StyledFullBackground = styled(ArtDirectedFullBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledFullBackground;
